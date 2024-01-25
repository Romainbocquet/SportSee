import '../assets/styles/Sidebar.css';

export default function Sidebar() {
  return (
      <div id="sidebar">
        <div className='sidebar-link'>
          <a href="#"><i className="fa-solid fa-heart"></i></a>
          <a href="#"><i className="fa-solid fa-person-swimming"></i></a>
          <a href="#"><i className="fa-solid fa-person-biking"></i></a>
          <a href="#"><i className="fa-solid fa-dumbbell"></i></a>
        </div>
        <div className='copiryght'>
          <p>Copiryght, SportSee 2020</p>
        </div>
      </div>
  )
}