import React from 'react';
import reactDom from 'react-dom';

class KonferenceCard extends React.Component{

    /* constructor(props) {
        super(props);
        this.state = {
          open: false
        };
      } */
      state = {
          open: false
      }



    render(){

        /* const [isOpened, setIsOpened] = useState(false); */

        /* function hide() {
            this.setState({ open: !this.state.open });
            //this.setState({open: !this.state.open})
            //this.state.open = !this.state.open;
            //setIsOpened(isOpened => !isOpened);
        } */

        let card;
        const opened = this.state.open;

        if (opened){
            card = (<nav id="navbar" class="navbar navbar-light bg-light px-3">
            <a class="navbar-brand"></a>
            <ul class="nav nav-pills">
                <li class="nav-item">
                    <button class="btn-round btn-fill btn-primary pull-right"
                            onClick=""
                    >
                        Zobraz príspevky
                    </button>
                </li>
                <li class="nav-item">
                    <button class="btn-round btn-fill btn-primary pull-right"
                            onClick=""
                    >
                        Uprav harmonogram
                    </button>
                </li>
                <li>
                    <button class="btn-round btn-fill btn-primary pull-right"
                            onClick=""
                    >
                        Uprav konferenci
                    </button>
                </li>
            </ul>
        </nav>)
        } else {
            card = null;
        }

        //(() => this.setState({ open: true/* !this.state.open */ })
        return (
        <div class="card">
            <div class="card-header card-header-flex">
                <h3 class="card-title text-bold"> Konference </h3>
                <button class="btn btn-round btn-fill btn-primary show-hide-btn-sm"
                        onClick={(() => this.setState({ open: !this.state.open }))}>
                    <i class="nc-icon nc-stre-up"></i>
                </button>
            </div>
    
            {card}
    
            <div class="row">
                <div class="card-body custom-card-body no-padding-sm-scr" id="konference">
                </div>
            </div>
        </div>
        )
    }

}

export default KonferenceCard;