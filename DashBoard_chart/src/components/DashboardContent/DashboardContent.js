import Chart from "./Chart";
import DashboardHeading from "./DashboardHeading";
import Table from "./Table";

function DashboardContent() {
    return (
            <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <DashboardHeading></DashboardHeading>
            <div>
              <Chart></Chart>
            </div>
            <Table></Table>
          </main>
    )}

export default DashboardContent