import { Component } from "react";

interface JumbotronProp {
    contentTitle: string
    contentBody: string
    imgSource: string
    imgAlt: string
}

class Jumbotron extends Component<JumbotronProp> {

    constructor(props: JumbotronProp) {
        super(props)
    }

    render() {
        const { contentTitle } = this.props.contentTitle
        const { contentBody } = this.props.contentTitle
        const { imgSource } = this.props.imgSource
        const { imgAlt } = this.props.imgAlt
        return (
            <>
                <div className="container py-5">
                        <div className="row">

                            <div className="col-md-8">
                                <h1 className="display-5 fw-bold pb-2">{contentTitle}</h1>
                                <p className="col-lg-10 fs-4 pb-2">{contentBody}</p>
                            </div>

                            <img className="col-md-4" src={imgSource} alt={imgAlt}/>

                        </div>
                    </div>
            </>
        )
    }
}

export default Jumbotron