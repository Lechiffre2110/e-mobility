import GithubLogo from "../assets/github.svg";

export default function Footer() {
  return (
    <>
      <div className="w-full flex flex-row justify-between items-center h-10 px-10 fixed bottom-5">
        <img className="hover:bg-red-300 rounded-full h-9" src={GithubLogo}></img>
        <a className="group ease-in duration-300">Impressum</a>
      </div>
    </>
  );
}
