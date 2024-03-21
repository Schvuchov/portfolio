export default function Start() {
    return(
        <section id="startSection" className="startSec">
            <div className="startSecDiv">
                <div className="startSecContent">
                    <p className="title">Olá, me chamo Bárbara</p>
                    <h1>
                        <span>FullStack</span>{" "}
                        <br />
                        Developer
                    </h1>
                    <p className="description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        <br /> Aliquam totam vitae laborum consectetur.
                    </p>
                </div>
                <button className="btn btn-primary">Entre em contato</button>
            </div>
            <div className="startSecImg">
                <img src="./img/startImg.jpg" alt="Start Section" />
            </div>
        </section>
    )
}