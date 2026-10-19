function Panel({
    children,
    judul
}) {
  return (
    <div className="Panel">
      {children}
      {judul}
    </div>
  );
}
export default Panel;
