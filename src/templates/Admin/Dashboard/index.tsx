import DataList from "components/DataList";
import NavMenu from "components/NavMenu";
import ReportHeader from "components/ReportHeader";

const Dashboard = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <NavMenu />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <ReportHeader />
            <h2>Section title</h2>
            <DataList />
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
