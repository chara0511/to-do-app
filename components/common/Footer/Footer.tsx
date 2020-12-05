import Image from 'next/image';

const Footer = (): JSX.Element => {
  return (
    <footer className="flex items-center justify-center w-full text-sm">
      <a
        className="mr-1"
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by
      </a>
      <Image src="/vercel.svg" alt="Vercel Logo" width={60} height={22} />
    </footer>
  );
};

export default Footer;
