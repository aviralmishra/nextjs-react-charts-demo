export default function DashboardLayout({
    children, // will be a page or nested layout
}) {
    return (
        <section>
            {/* Shared UI here e.g. a header or sidebar */}
            <nav></nav>

            {children}
        </section>
    )
}