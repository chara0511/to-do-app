import { Layout, Searchbar, ToDoList } from '@components/common';
import Link from 'next/link';

const Home = (): JSX.Element => {
  return (
    <>
      <Searchbar />

      <div>
        <ToDoList />
      </div>

      <Link href="/demo">Read it here</Link>
    </>
  );
};

Home.Layout = Layout;

export default Home;
