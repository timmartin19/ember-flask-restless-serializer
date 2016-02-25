/**
 * Created by Tim Martin on 10/31/14.
 */


EmberFlaskRestless = {
    options: {
        namespace: 'api/',
        extractArray: function(store, type, payload){

        },
        extractSingle: function(store, primaryType, payload, recordId){
            var payloadAdapted = {};
            alert(JSON.stringify(primaryType));
            payloadAdapted[primaryType.typeKey] = payload;
            return this._super(store, primaryType, payloadAdapted, recordId);
        },
        serialize: function(record, options){

        },
        serializeIntoHash: function(hash, type, record, options){

        }
    }
};