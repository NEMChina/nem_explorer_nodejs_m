import mongoose from 'mongoose';
import nis from '../utils/nisRequest';
import address from '../utils/address';
import message from '../utils/message';

module.exports = {

	/**
     * get node list (including supernodes)
     */
	nodeList: (req, res, next) => {
		try {
			nis.nodePeerListReachable(data => {
				if(!data || !data.data){
					res.json([]);
					return;
				}
				//collect all the nodes
				let r_nodeArray = [];
				let r_node = null;
				data.data.forEach(node => {
					if(node && node.metaData && node.endpoint && node.identity){
						r_node = {};
						r_node.host = node.endpoint.host;
						r_node.name = node.identity.name;
						r_node.version = node.metaData.version;
						r_nodeArray.push(r_node);
					}
				});
				res.json(r_nodeArray);
			});
		} catch (e) {
			console.error(e);
		}
	}
}