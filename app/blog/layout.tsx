type Props = { children: React.ReactNode };

const RootLayout = ({ children }: Props) => {
  return (
    <section id="blog" className="h-full bg-green-300">
      <h2>Blogページ</h2>
      <div>{children}</div>
    </section>
  );
};

export default RootLayout;
