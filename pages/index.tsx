import { Layout, Searchbar } from '@components/common';
import Link from 'next/link';

const Home = (): JSX.Element => {
  return (
    <>
      <Searchbar />

      <div>
        <ul>
          <li>
            <div>
              <span>i</span>
              <p>Jog around the park 3x</p>
              <span>x</span>
            </div>
          </li>
        </ul>
        <div>
          <p>5 items left</p>
          <p>clear completed</p>
        </div>
      </div>

      <Link href="/demo">Read it here</Link>
    </>
  );
};

Home.Layout = Layout;

export default Home;
