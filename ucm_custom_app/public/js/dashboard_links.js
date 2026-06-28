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
        { label: '📦 Item-wise
