import React from 'react';
import { PieChart, Pie} from 'recharts';
function Home()
{ const data02 = [
    
  { name: 'A2', value: 600, fill: '#83a6ed' },
  { name: 'B1', value: 600, fill: '#8dd1e1' },
 
  { name: 'C2', value: 600, fill: '#f3a434' },
  
];
    return(<>
   <div class="container bg overflow-x-hidden">
  <div class="row align-items-start">
    <div class="col bg1 rounded-2 m-1">
     
    <div class="d-flex flex-row ">
  <div class="p-2"><button type="button" class="btn btns fs">Your Organization
  <br/><b>Skill genic</b>
</button></div>
  <div class="p-2"><div class="input-group">
  <span class="input-group-text" id="basic-addon1"><i class="bi bi-search"></i></span>
  <input type="text" class="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1"/>
</div></div>
  <div class="p-2 ms-auto fs-5 display"><i class="bi bi-bell  m-1"></i><i class="bi bi-person-square"></i></div>
 
</div>
    </div>
    
   
  </div>


  <div class="container-fluid mt-2">
  <div class="row align-items-start">
    <div class="col">
    <div class="row">
  <div class="col-sm-6">
    <div class="card bg-transparent border border-0">
      <div class="card-body">
        <h3 class="card-title">Overview</h3>
      
      </div>
    </div>
  </div>
  <div class="col-sm-6 ">
    <div class="card bg-transparent border border-0">
      <div class="card-body d-flex justify-content-sm-start justify-content-md-end">
      <button type="button" class="btn btn-dark fs-5">Create Job</button>
      </div>
    </div>
  </div>
</div>
    </div>
   
  </div>
</div>





<div class="content">
     <div class="container-fluid ">
       <div class="row adjust1 adjust3">
<div class="col-sm-6 mb-3 mb-sm-0">
           <div class="card bg-transparent border border-0">
             
             <div class="card-body">
             <div class="row adjust adjust2 ">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class=" ">
      <div class="">
      <div class="small-box bg-light">
              <div class="inner">
              <h6 className="text-dark">Job Posts</h6>
                <h3 className="fw-bold text-secondary">2,456</h3>

                <h5 className="fw-bold text-success">+2.5%</h5>
              </div>
              <div class="icons">
              
              <i class="bi bi-graph-up f-size text-success"></i>  
              
              </div>
     
            </div>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="">
      <div class="">
      <div class="small-box bg-light">
              <div class="inner">
              <h6 className="text-dark">Total Application</h6>
                <h3 className="fw-bold text-secondary">4,561</h3>

                <h5 className="fw-bold text-danger">-4.4%</h5>
              </div>
              <div class="icons">
              <i class="bi bi-graph-down f-size text-danger"></i> 
              </div>
     
            </div>
      </div>
    </div>
  </div>
</div>
<div class="row adjust adjust2">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="">
      <div class="">
      <div class="small-box bg-light">
              <div class="inner">
              <h6 className="text-dark">Interview Schedule</h6>
                <h3 className="fw-bold text-secondary">125</h3>

                <h5 className="fw-bold text-warning">+1.5%</h5>
              </div>
              <div class="icons">
              
              <i class="bi bi-graph-up f-size text-warning"></i>  
              
              </div>
     
            </div>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="">
      <div class="">
      <div class="small-box bg-light">
              <div class="inner">
              <h6 className="text-dark">Application on Hold</h6>
                <h3 className="fw-bold text-secondary">2,456</h3>

                <h5 className="fw-bold text-success">+4.5%</h5>
              </div>
              <div class="icons">
              
              <i class="bi bi-graph-up text-success f-size"></i>  
              
              </div>
     
            </div>
      </div>
    </div>
  </div>
</div>  
             

               

              
             </div>
           </div>
           


<div className="">

           <div class="card">
             <div class="card-header border-0 p-3 d-flex justify-content-between">
              
               <h5 class="card-title fw-bold">Recent Job Posts</h5>
               <div class="">
                 
                 <button type="button" class="btn btn-dark btn-sm rounded-pill ">See All</button>
                 
                 
               </div>
             </div>
             <div class="card-body table-responsive pt-4">
             <table class="table">
             <thead class="table-info">
             <tr>
      <th scope="col">Job Title</th>
      <th scope="col">Category</th>
      <th scope="col">Openings</th>
      <th scope="col">Applications</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <td>UI UX Designer</td>
      <td>Full Time</td>
      <td>12</td>
      <td>135</td>
      <td><button type="button" class="btn btn-success btn-sm"style={{"width":"70px"}}>Active</button></td>
    </tr>
  <tr>
      <td>Full Stack Dev</td>
      <td>Full Time</td>
      <td>08</td>
      <td>100</td>
      <td><button type="button" class="btn btn-danger btn-sm"style={{"width":"70px"}}>Inactive</button></td>
    </tr>
  <tr>
      <td>DevOps</td>
      <td>Internship</td>
      <td>12</td>
      <td>05</td>
      <td><button type="button" class="btn btn-success btn-sm"style={{"width":"70px"}}>Active</button></td>

    </tr>
  <tr>
      <td>Android Dev</td>
      <td>Full Time</td>
      <td>04</td>
      <td>45</td>
      <td><button type="button" class="btn btn-success btn-sm"style={{"width":"70px"}}>Active</button></td>

    </tr>
  <tr>
      <td>IOS Developer</td>
      <td>Full Time</td>
      <td>18</td>
      <td>96</td>
      <td><button type="button" class="btn btn-danger btn-sm"style={{"width":"70px"}}>Inactive</button></td>

    </tr>
  </tbody>
  </table>
             </div>
           </div>
</div>
          
         </div>
  

         <div class="col-sm-6 mb-3 mb-sm-0">
           <div class="card">
           <div class="card-header border-0">
               <div class="d-flex justify-content-between">
                 <h5 class="card-title fw-bold">Hiring Pipeline</h5>
                 <button type="button" class="btn btn-sm text-warning fw-bold">Download Report</button>
                 
               </div>
             </div>
             <div class="">
        
             <div class="card-body card-body1">
  <PieChart width={400} height={350}>
          
          <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={100} outerRadius={130} fill="#82ca9d" label />
        </PieChart>

  </div>
  <div class="d-flex flex-row justify-content-evenly">
  <div class=""><i class="bi bi-square-fill mx-1"style={{"color":"#83a6ed"}}></i>Shortlisted
  </div>
  <div class=""><i class="bi bi-square-fill mx-1"style={{"color":"#8dd1e1"}}></i>In Process</div>
  <div class=""><i class="bi bi-square-fill mx-1"style={{"color":"#f3a434"}}></i>Hired</div>
</div>
  <div class="d-flex flex-row justify-content-around">
  <div class="p-2 fw-bold">942
  </div>
  <div class="p-2 fw-bold">25</div>
  <div class="p-2 fw-bold">2,452</div>
</div>
             

               
              
             </div>
           </div>
           



           <div class="card mt-2"style={{"height":"39%"}}>
           <div class="card-header border-0 p-3 ">
              
              <h5 class="card-title fw-bold">Upcoming Interviews</h5>
              
            </div>
            <div class="card-body table-responsive">
             <table class="table">
             <thead class="table-warning">
             <tr>
      <th scope="col">Name</th>
      <th scope="col">Job</th>
      <th scope="col">Date</th>
      <th scope="col">Interview Time</th>
      <th scope="col">View</th>
    </tr>
  </thead>
  <tbody>
  <tr className='fw-bold'>
      <td><img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=996&t=st=1709536117~exp=1709536717~hmac=561b7b74072dfe747f9f4ba721e62ba45a4422811bfb6cf9f2d0a7e52667873c" class="img-fluid rounded-circle" alt="..."style={{'width':"30px","height":"30px"}}/>Amir</td>
      <td>Marketing</td>
      <td>26/03/2023</td>
      <td>2:00 AM</td>
      <td><i class="bi bi-eye-fill fs-4"></i></td>
    </tr>
 
  

  
  </tbody>
  </table>
             </div>
           </div>
          
         </div>

</div></div></div>



 


</div>
  
    </>)
}
export default Home;