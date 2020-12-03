import { Layout } from '@components/common';

const Home = (): JSX.Element => {
  return (
    <>
      <div>
        <form>
          <input type="text" value="create a new todo..." />
          <input type="submit" value="submit" />
        </form>
      </div>

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
    </>
  );
};

Home.Layout = Layout;

export default Home;
