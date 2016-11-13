import Footer from './footer.jsx';
class Section extends React.Component {
	render() {
		return (
			<div id="sponsors-section">
				<div className="uk-width-8-10 uk-container-center uk-flex uk-flex-center uk-flex-middle uk-flex-column">
					<h1 className="header">SPONSORS</h1>
					<img style={{
						width: 150,
						height: 150
					}} className="img-responsive" src={this.props.logo}/>
					<h2 className="text-center" style={{
						color: "#e0ffb7"
					}}>Department of Computer Engineering</h2>
          <div className="flex flex-center uk-grid uk-width-1-1">
            <div className="flex flex-center uk-width-medium-1-4 uk-width-large-1-4 uk-width-small-1-1 uk-margin-top uk-margin-left uk-margin-right">
              <a href="https://www.glazziq.com" target="_blank">
                <img src={this.props.platinum1}/>
              </a>
            </div>
            <div className="flex flex-center uk-width-medium-1-4 uk-width-large-1-4 uk-width-small-1-1 uk-margin-top uk-margin-left uk-margin-right">
              <a href="https://www.lnwshop.com" target="_blank">
                <img src={this.props.platinum2}/>
              </a>
            </div>
          </div>
          <div className="flex flex-center uk-grid uk-width-1-1">
            <div className="flex flex-center uk-width-medium-1-4 uk-width-large-1-4 uk-width-small-1-1 uk-margin-top uk-margin-left uk-margin-right">
              <a href="http://www.mfec.co.th" target="_blank">
                <img src={this.props.platinum3}/>
              </a>
            </div>
            <div className="flex flex-center uk-width-medium-1-4 uk-width-large-1-4 uk-width-small-1-1 uk-margin-top uk-margin-left uk-margin-right">
              <a href="https://www.wongnai.com" target="_blank">
                <img src={this.props.platinum4}/>
              </a>
            </div>
          </div>
					<div className="flex flex-center uk-grid uk-width-1-1 uk-margin-top">
						<div className="flex flex-center uk-width-6-10 uk-width-medium-1-5 uk-width-large-1-5 uk-margin-top uk-margin-bottom uk-margin-left uk-margin-right">
              <a href="http://oozou.com" target="_blank">
                <img src={this.props.gold1}/>
              </a>
						</div>
            <div className="flex flex-center uk-width-6-10 uk-width-medium-1-5 uk-width-large-1-5 uk-margin-top uk-margin-bottom uk-margin-left uk-margin-right">
              <a href="https://taskworld.com" target="_blank">
                <img src={this.props.gold2}/>
              </a>
						</div>
					</div>
					<div className="flex flex-center uk-grid uk-width-1-1">
						<div className="flex flex-center uk-width-medium-1-6 uk-width-large-1-6 uk-width-2-5 uk-margin-top uk-margin-left uk-margin-right">
              <a href="https://www.blognone.com" target="_blank">
                <img src={this.props.silver1}/>
              </a>
						</div>
						<div className="flex flex-center uk-width-medium-1-6 uk-width-large-1-6 uk-width-2-5 uk-margin-top uk-margin-left uk-margin-right">
              <a href="http://www.mangozero.com" target="_blank">
                <img src={this.props.silver2}/>
              </a>
						</div>
					</div>
          <div className="flex flex-center uk-grid uk-width-1-1">
            <div className="flex flex-center uk-width-medium-1-6 uk-width-large-1-6 uk-width-2-5 uk-margin-top uk-margin-left uk-margin-right">
              <a href="http://www.prontotools.io" target="_blank">
                <img src={this.props.silver3}/>
              </a>
            </div>
            <div className="flex flex-center uk-width-medium-1-6 uk-width-large-1-6 uk-width-2-5 uk-margin-top uk-margin-left uk-margin-right">
              <a href="http://pantip.com" target="_blank">
                <img src={this.props.silver4}/>
              </a>
						</div>
          </div>
					<div className="flex flex-center uk-grid uk-width-1-1">
						<div className="flex flex-center uk-width-medium-1-6 uk-width-large-1-6 uk-width-2-5 uk-margin-top uk-margin-left uk-margin-right">
              <a href="http://www.sellsuki.co.th" target="_blank">
                <img src={this.props.silver5}/>
              </a>
						</div>
						<div className="flex flex-center uk-width-medium-1-6 uk-width-large-1-6 uk-width-2-5 uk-margin-top uk-margin-left uk-margin-right">
              <a href="http://sprint3r.com" target="_blank">
                <img src={this.props.silver6}/>
              </a>
						</div>
					</div>
          <div className="flex flex-center uk-grid uk-width-1-1">
						<div className="flex flex-center uk-width-medium-1-6 uk-width-large-1-6 uk-width-2-5 uk-margin-top uk-margin-left uk-margin-right">
              <a href="https://www.getlinks.co" target="_blank">
                <img src={this.props.silver7}/>
              </a>
						</div>
					</div>
				</div>
				<Footer {...this.props}/>
				<p className="credit uk-text-uppercase uk-text-center no-margin thin">created by cpsk nisit :)</p>
			</div>
		);
	}
}

export default Section;
