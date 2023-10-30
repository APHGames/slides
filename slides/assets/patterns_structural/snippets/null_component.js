class NullAnimComponent extends Component {

	constructor() {
		super('AnimComponent')
	}

	onUpdate() {
		// immediately end
		this.finish();
	}
}