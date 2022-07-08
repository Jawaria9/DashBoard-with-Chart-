import DashboardContent from "./DashboardContent/DashboardContent";
import DashboardHeader from "./DashboardHeader";
import Sidebar from "./Sidebar";



function DashboardMain() {

  return (
    <div>
      <DashboardHeader></DashboardHeader>
      <div class="container-fluid">
        <div class="row">
          <DashboardContent></DashboardContent>
          <Sidebar></Sidebar>
        </div>
      </div>
    </div>
  )
}

export default DashboardMain