frappe.router.on('change', function() {
    setTimeout(ucmDashboardLinks, 1500);
});
setTimeout(ucmDashboardLinks, 2000);

function ucmDashboardLinks() {
    if (!window.location.href.includes('dashboard-view/Purchase')) return;
    if ($('#ucm-quick-links').length) return;

    let docLinks = [
        { label: '📋 Material Request', url: '/app/material-request', bg: '#d4edda', border: '#28a745', color: '#155724' },
        { label: '🧾 Purchase Receipt', url: '/app/purchase-receipt', bg: '#d1ecf1', border: '#17a2b8', color: '#0c5460' },
        { label: '🛒 Purchase Order',   url: '/app/purchase-order',   bg: '#cce5ff', border: '#004085', color: '#004085' },
        { label: '📦 Stock Balance',    url: '/app/stock-balance',    bg: '#fff3cd', border: '#ffc107', color: '#856404' },
        { label: '🏭 Items',            url: '/app/item',             bg: '#fde8d8', border: '#fd7e14', color: '#7d3c0a' },
        { label: '🤝 Supplier',         url: '/app/supplier',         bg: '#fce4ec', border: '#e91e63', color: '#880e4f' },
        { label: '📊 Stock Ledger',     url: '/app/stock-ledger',     bg: '#e2d9f3', border: '#6f42c1', color: '#4a2c91' },
    ];

    let reportLinks = [
        { label: '📈 UCM PO Analysis',           url: '/app/query-report/UCM%20Purchase%20Order%20Analysis' },
        { label: '🧠 UCM Purchase Intelligence', url: '/app/query-report/UCM%20Purchase%20Intelligence%20Report' },
        { label: '📊 Purchase Analytics',        url: '/app/query-report/Purchase%20Analytics' },
        { label: '📉 PO Trends',                 url: '/app/query-report/Purchase%20Order%20Trends' },
        { label: '📦 Item-wise History',         url: '/app/query-report/Item-wise%20Purchase%20History' },
    ];

    let docBtns = docLinks.map(l => `<a href="${l.url}" class="ucm-link" style="flex:1;text-align:center;padding:8px 10px;background:${l.bg};border:1px solid ${l.border};border-radius:6px;text-decoration:none;color:${l.color};font-size:12px;font-weight:500;white-space:nowrap;">${l.label}</a>`).join('');
    let reportBtns = reportLinks.map(l => `<a href="${l.url}" class="ucm-link" style="flex:1;text-align:center;padding:8px 10px;background:#f0f4ff;border:1px solid #d0d9ff;border-radius:6px;text-decoration:none;color:#3355cc;font-size:12px;font-weight:500;white-space:nowrap;">${l.label}</a>`).join('');

    $('<style>.ucm-link{transition:all 0.2s ease!important;}.ucm-link:hover{transform:translateY(-3px)!important;box-shadow:0 4px 12px rgba(0,0,0,0.15)!important;opacity:0.9!important;}</style>').appendTo('head');

    let html = `
    <div id="ucm-quick-links" style="margin:16px;padding:16px;background:#fff;border:1px solid #e0e0e0;border-radius:8px;box-shadow:0 1px 4px rgba(0,0,0,0.08);">
        <div style="font-size:11px;color:#8d99ae;text-transform:uppercase;letter-spacing:1px;margin-bottom:10px;font-weight:600;">⚡ Quick Links</div>
        <div style="display:flex;flex-wrap:nowrap;gap:8px;margin-bottom:12px;">${docBtns}</div>
        <div style="font-size:11px;color:#8d99ae;text-transform:uppercase;letter-spacing:1px;margin-bottom:10px;font-weight:600;">📊 Reports</div>
        <div style="display:flex;flex-wrap:nowrap;gap:8px;">${reportBtns}</div>
    </div>`;

    $('.page-content').last().append(html);
}
