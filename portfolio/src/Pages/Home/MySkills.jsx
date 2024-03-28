import data from "../../data/index.json"

export default function MySkills(){
    return(
        <section id="mySkills" className="skillsSection">

            <div className="skillsSectionContainer">
                <p className="sectionTitle">Habilidades</p>
                <h2 className="skillsSectionHeading">Meus conhecimentos</h2>
            </div>

            <div className="skillsContainerContent">
                {data?.skills?.map((item, indec) => (
                    <div key={index} className="skillsCard">
                        <div className="skillsImg">
                            <img src={item.src} alt="" />
                        </div>
                        <div className="skillsCardContent">
                            <h3 className="skillsCardTitle">{item.title}</h3>
                            <p className="skillsCardDescrip">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}