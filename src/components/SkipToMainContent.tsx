/**
 * First focusable control: bypasses fixed nav for keyboard and screen-reader users.
 */
const SkipToMainContent = () => {
  return (
    <a href="#main-content" className="skip-link">
      Skip to main content
    </a>
  );
};

export default SkipToMainContent;
