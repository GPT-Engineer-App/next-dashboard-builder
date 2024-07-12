const Footer = () => {
  return (
    <footer className="border-t bg-muted/40 p-4 text-center">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Acme Inc. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;