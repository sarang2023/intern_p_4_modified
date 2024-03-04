import { Link } from "react-router-dom";




function Sidebar()
{
    return(<>


    
<div className="col-sm-3 bg-dark overflow-x-hidden">

<div class="col ">





<ul class="nav flex-column ">
<li class="nav-item">
<div class="d-flex flex-row mb-3 fs-2 mx-3">
<div class="p-2 "> <i class="bi bi-nut text-light"></i></div>
<div class="p-2 fw-bold text-light">Logo</div>

</div>
</li>
<li class="nav-item mt-2">
<Link to="home" class="nav-link " aria-current="page" href="#">
<div class="d-flex flex-row fs-5 active">
<div class="p-2 "> <i class="fa-solid fa-house text-light"></i></div>
<div class="p-2  text-light">Home</div>

</div></Link>
</li>
<li class="nav-item">
<a class="nav-link" aria-current="page" href="#">
<div class="d-flex flex-row fs-5 ">
<div class="p-2 "> <i class="fa-solid fa-message text-light"></i></div>
<div class="p-2  text-light">Chat</div>
<div class="p-2  text-light ms-auto"><i class="right fas fa-angle-right"></i></div>

</div></a>
</li>
<li class="nav-item">
<a class="nav-link" aria-current="page" href="#">
<div class="d-flex flex-row fs-5 ">
<div class="p-2 "> <i class="fa-solid fa-chart-line text-light"></i></div>
<div class="p-2  text-light">Activities</div>

<div class="p-2  text-light ms-auto"><i class="right fas fa-angle-right"></i></div>


</div>
</a>
</li>
<li class="nav-item">
<a class="nav-link" aria-current="page" href="#">
<div class="d-flex flex-row fs-5 ">

<div class="p-2  text-secondary fw-bold fs-6 mt-3">RECRUITMENT</div>

</div>
</a>
</li>
<li class="nav-item">
<a class="nav-link" aria-current="page" href="#">
<div class="d-flex flex-row fs-5 ">
<div class="p-2 "> <i class="fa-solid fa-briefcase text-light"></i></div>
<div class="p-2  text-light">Jobs</div>

<div class="p-2  text-light ms-auto"><i class="right fas fa-angle-right"></i></div>


</div>
</a>
</li>
<li class="nav-item">
<a class="nav-link" aria-current="page" href="#">
<div class="d-flex flex-row fs-5 ">
<div class="p-2 "> <i class="fa-sharp fa-solid fa-people-arrows text-light"></i></div>
<div class="p-2  text-light">Interviews</div>

<div class="p-2  text-light ms-auto"><i class="right fas fa-angle-right"></i></div>


</div>
</a>
</li>
<li class="nav-item">
<a class="nav-link" aria-current="page" href="#">
<div class="d-flex flex-row fs-5 ">
<div class="p-2 "> <i class="fa-solid fa-tag text-light"></i></div>
<div class="p-2  text-light">New Hires</div>

<div class="p-2  text-light ms-auto"><i class="right fas fa-angle-right"></i></div>


</div>
</a>
</li>

<li class="nav-item">
<a class="nav-link" aria-current="page" href="#">
<div class="d-flex flex-row fs-5 ">

<div class="p-2  text-secondary fw-bold fs-6 mt-3">ORGANIZATION</div>

</div>
</a>
</li>

<li class="nav-item">
<a class="nav-link" aria-current="page" href="#">
<div class="d-flex flex-row fs-5 ">
<div class="p-2 "> <i class="fa-solid fa-building text-light"></i></div>
<div class="p-2  text-light">Company Profile</div>

<div class="p-2  text-light ms-auto"><i class="right fas fa-angle-right"></i></div>


</div>
</a>
</li>
<li class="nav-item">
<a class="nav-link" aria-current="page" href="#">
<div class="d-flex flex-row fs-5 ">
<div class="p-2 "> <i class="fa-solid fa-people-group text-light"></i></div>
<div class="p-2 text-light">Community</div>

<div class="p-2 text-light ms-auto"><i class="right fas fa-angle-right"></i></div>


</div>
</a>
</li>
<li class="nav-item">
<a class="nav-link" aria-current="page" href="#">
<div class="d-flex flex-row fs-5 ">
<div class="p-2 "> <i class="fa-sharp fa-solid fa-people-group text-light"></i></div>
<div class="p-2 text-light">Team</div>

<div class="p-2 text-light ms-auto"><i class="right fas fa-angle-right"></i></div>


</div>
</a>
</li>
<li class="nav-item">
<a class="nav-link" aria-current="page" href="#">
<div class="d-flex flex-row fs-5 ">
<div class="p-2 "> <i class="fa-solid fa-business-time text-light"></i></div>
<div class="p-2 text-light">HR Tool Box</div>

<div class="p-2 text-light ms-auto"><i class="right fas fa-angle-right"></i></div>


</div>
</a>
</li>
<li class="nav-item">
<a class="nav-link" aria-current="page" href="#">
<div class="d-flex flex-row fs-5 ">
<div class="p-2 "> <i class="fa-solid fa-chart-simple text-light"></i></div>
<div class="p-2 text-light">Reports</div>

<div class="p-2 text-light ms-auto"><i class="right fas fa-angle-right"></i></div>


</div>
</a>
</li>
<li class="nav-item">
<a class="nav-link" aria-current="page" href="#">
<div class="d-flex flex-row fs-5 ">
<div class="p-2 "> <i class="fa-solid fa-gear text-light"></i></div>
<div class="p-2 text-light">Settings</div>

<div class="p-2 text-light ms-auto"><i class="right fas fa-angle-right"></i></div>


</div>
</a>
</li>

<li class="nav-item mb-5">



<div class="p-2 mx-3 text-light fs-4 mt-5 fw-bold">Need Help? <br />
<div class="  fs-6 text-secondary">Open over help center</div>
</div>



</li>

</ul>
</div>









</div>



    </>)
}
export default Sidebar;