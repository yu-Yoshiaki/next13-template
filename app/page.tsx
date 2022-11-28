"use client";

const Page = () => {
  const handleClick = () => {
    window.alert("Hello, World!");
  };

  return (
    <div>
      <h2>Index</h2>
      <button type="button" className="p-2" onClick={handleClick}>
        Click me!
      </button>
    </div>
  );
};

export default Page;
