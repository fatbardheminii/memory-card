export default function Footer() {
  return (
    <footer>
      <p>
        © {new Date().getFullYear()} |{" "}
        <a href="https://github.com/fatbardheminii" target="_blank">
          <i className="fa-brands fa-github"></i>
        </a>{" "}
        Fatbardh Emini
      </p>
    </footer>
  );
}
