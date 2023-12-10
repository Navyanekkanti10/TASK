import Singlestudent from "./Singlestudent";
export default function Student() {
   
    let employee=[{
        name:"Sai",
        image:"https://bootstrapmade.com/demo/templates/Gp/assets/img/team/team-1.jpg" 
        },
        {
         name:"Seetha", 
        image:"https://bootstrapmade.com/demo/templates/Gp/assets/img/team/team-2.jpg" 
        },
        {
         name:"Kavya", 
         image:"https://bootstrapmade.com/demo/templates/Gp/assets/img/team/team-3.jpg" 
        },
        {
        name:"Aadya",
        image:"https://bootstrapmade.com/demo/templates/Gp/assets/img/team/team-4.jpg"
         },
        {
        name:"Pinky",
        image:"https://bootstrapmade.com/demo/templates/Gp/assets/img/team/team-4.jpg"
        },
        {
        name:"Sanvi",
        image:"https://bootstrapmade.com/demo/templates/Gp/assets/img/team/team-4.jpg"
        },
        {
            name:"Ananya",
            image:"https://bootstrapmade.com/demo/templates/Gp/assets/img/team/team-4.jpg"
             },
             {
                name:"ARJUN",
                image:"https://bootstrapmade.com/demo/templates/Gp/assets/img/team/team-1.jpg" 
                },
                {
                 name:"Geetha", 
                image:"https://bootstrapmade.com/demo/templates/Gp/assets/img/team/team-2.jpg" 
                }
             
            ]
    return (
        <div style={{display:"flex",flexWrap:"wrap",gap:"120px" }}>
       
        {employee.map(({name,image}) => 
        {
            return <Singlestudent name={name} image={image}/>
        })}
       
        </div>
    )
}