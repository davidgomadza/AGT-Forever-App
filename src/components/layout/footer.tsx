export default function Footer() {
  return (
    <footer className="border-t border-border/40 py-6">
      <div className="container flex items-center justify-center px-4 md:px-6">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} AGT Forever. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
