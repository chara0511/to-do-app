import { FilterBar, Layout, Searchbar, ToDoItems } from '@components/common';

const Home = (): JSX.Element => {
  return (
    <>
      <Searchbar />

      <ToDoItems />

      <FilterBar />

      <div className="h-28 mb-4 flex justify-center items-center text-gray-400">
        <span>Drag and drop to reorder list</span>
      </div>
    </>
  );
};

Home.Layout = Layout;

export default Home;
