import { Component } from "react";
import { JumbotronProp } from "../../types/Jumbotron";

// TODO: Hacer que el componente reciva un objeto en vez de varios parametros
// TODO: Permitir que halla un fondo atractivo como ola svg

class Jumbotron extends Component<JumbotronProp> {

    constructor(props: JumbotronProp) {
        super(props)

        this.state = {}
    }

    render() {
        const displayReverse = this.props.revDisplay
        const JumboTitle = this.props.header
        const JumboContent = this.props.body
        const JumboImgSource = this.props.img.source
        const JumboImgAlt = this.props.img.alt
        const JumboBtnCallback = this.props.btn.callback
        const JumboBtnLabel = this.props.btn.label

        return (
            <>
                <div className="p-5 mb-4 rounded-3">
                    <div className={displayReverse? "container-fluid row row-rev py-5" : "container-fluid row py-5"}>
                        <div className="col-md-8">
                            <h1 className="display-5 fw-bold">{JumboTitle}</h1>
                            <p className="fs-4">{JumboContent}</p>
                            <button className="btn btn-primary btn-lg" type="button" onClick={JumboBtnCallback}>{JumboBtnLabel}</button>
                        </div>
                        <div className="col-md-4">
                            <img src={JumboImgSource} alt={JumboImgAlt} height="100%" width="100%" />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Jumbotron