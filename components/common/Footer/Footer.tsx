import { VercelIcon } from '@components/icons';
import styles from './Footer.module.css';

const Footer = (): JSX.Element => {
  return (
    <footer>
      <a
        className={`${styles.container} dark:text-gray-300`}
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by
        <span className="ml-1">
          <VercelIcon className="w-16" />
        </span>
      </a>
    </footer>
  );
};

export default Footer;
