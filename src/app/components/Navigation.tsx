import TransitionLink from "./TransitionLink";

const Navigation = () => {
  return (
    <nav className="w-full p-5 flex flex-row place-items-center justify-center">
      <div className="flex gap-5">
        <TransitionLink href="/" label="Home" />
        <TransitionLink href="/work" label="Work" />
        <TransitionLink href="/about" label="About" />
      </div>
    </nav>
  );
};

export default Navigation;
