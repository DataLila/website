// BRE-087: local API sandbox for the SDK demo page. Intercepts fetch()
// calls the real `datalila-bre` (bre-js) npm package makes to
// `/mock-api/...` and answers them from an in-memory ruleset store --
// zero network calls, zero signup, but genuinely the same request/response
// shape bre-service's real REST API uses, so client code written against
// this sandbox needs no changes to point at a real deployment later.
//
// Scope is intentionally narrow: only the three endpoints BreClient
// actually calls (list, blob-by-hash, audit-log upload). Not a general
// bre-service mock.

const MOCK_PREFIX = '/mock-api';

// One example ruleset baked in -- served exactly the way bre-service's
// real /api/v1/rulesets + /api/v1/rulesets/blob/:hash pair would.
const EXAMPLE_DMN_XML = `<?xml version="1.0" encoding="UTF-8"?>
<definitions xmlns="https://www.omg.org/spec/DMN/20191111/MODEL/" id="Definitions_Sandbox" name="Mortgage Eligibility" namespace="http://datalila.com/bre/sandbox">
  <decision id="Decision_Mortgage" name="Mortgage Eligibility">
    <decisionTable id="DecisionTable_1" hitPolicy="FIRST">
      <input id="Input_1" label="Debt-to-income ratio">
        <inputExpression id="InputExpression_1" typeRef="number"><text>dti</text></inputExpression>
      </input>
      <input id="Input_2" label="Credit score">
        <inputExpression id="InputExpression_2" typeRef="number"><text>credit_score</text></inputExpression>
      </input>
      <output id="Output_1" name="approved" typeRef="boolean" />
      <output id="Output_2" name="amount" typeRef="number" />
      <rule id="Rule_1">
        <inputEntry id="UnaryTests_1"><text>&lt;= 0.36</text></inputEntry>
        <inputEntry id="UnaryTests_2"><text>&gt;= 740</text></inputEntry>
        <outputEntry id="LiteralExpression_1"><text>true</text></outputEntry>
        <outputEntry id="LiteralExpression_2"><text>3.5</text></outputEntry>
      </rule>
      <rule id="Rule_2">
        <inputEntry id="UnaryTests_3"><text>&lt;= 0.43</text></inputEntry>
        <inputEntry id="UnaryTests_4"><text>&gt;= 680</text></inputEntry>
        <outputEntry id="LiteralExpression_3"><text>true</text></outputEntry>
        <outputEntry id="LiteralExpression_4"><text>4.2</text></outputEntry>
      </rule>
      <rule id="Rule_3">
        <inputEntry id="UnaryTests_5"><text>-</text></inputEntry>
        <inputEntry id="UnaryTests_6"><text>-</text></inputEntry>
        <outputEntry id="LiteralExpression_5"><text>false</text></outputEntry>
        <outputEntry id="LiteralExpression_6"><text>0</text></outputEntry>
      </rule>
    </decisionTable>
  </decision>
</definitions>`;

const RULESET_HASH = 'sandbox-mortgage-eligibility-v1';
const RULESET_LIST = [
    { id: 'sandbox-1', name: 'mortgage_eligibility', version: 1, format: 'dmn-xml', latest_hash: RULESET_HASH },
];

function jsonResponse(body, status = 200) {
    return new Response(JSON.stringify(body), {
        status,
        headers: { 'Content-Type': 'application/json' },
    });
}

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);
    // Base-agnostic: the site serves from "/" in dev and "/bre/" in
    // production, so match on the "/mock-api" segment wherever it appears
    // rather than assuming it's at the path root.
    const idx = url.pathname.indexOf(MOCK_PREFIX);
    if (idx === -1) return; // not ours, let it pass through untouched

    const path = url.pathname.slice(idx + MOCK_PREFIX.length);

    if (path === '/api/v1/rulesets' && event.request.method === 'GET') {
        event.respondWith(jsonResponse(RULESET_LIST));
        return;
    }

    if (path === `/api/v1/rulesets/blob/${RULESET_HASH}` && event.request.method === 'GET') {
        event.respondWith(
            new Response(EXAMPLE_DMN_XML, {
                status: 200,
                headers: { 'Content-Type': 'application/octet-stream', 'X-Ruleset-Format': 'dmn-xml' },
            })
        );
        return;
    }

    if (path === '/api/v1/analytics/logs' && event.request.method === 'POST') {
        event.respondWith(
            event.request.json().then((body) => {
                console.log('[sdk-sandbox] audit logs "uploaded" (intercepted locally, never left the browser):', body);
                return jsonResponse({ accepted: (body.logs || []).length });
            })
        );
        return;
    }

    event.respondWith(jsonResponse({ error: `sandbox has no mock for ${path}` }, 404));
});
