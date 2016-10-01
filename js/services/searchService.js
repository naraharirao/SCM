
app.factory("searchService",function($http){
	
	var obj={};
	obj.searchData=[];
	
	obj.doSearch=function(searchObj){
		
			
		var searchObj1=
		{ "query":
	    { "filtered":
	        { "query":
	            { "query_string":
	                { "query": searchObj.name.toString() }
	            },
	            "filter": {
	                "term":{"Component Name":searchObj.category.toLowerCase()}
	                }
	                }
	            } 
	                
	}
		
		return $http.post("http://search-vendors-3athlqwdyn25kyc6sjhglygg2u.us-west-2.es.amazonaws.com/index4/type/_search?size=200",searchObj1).then(function(resp){
			
			
			obj.setSearchData(resp.data.hits.hits);
			
			return resp.data;
			
		})
		
		
	}
		obj.setSearchData=function(searchData){
			
			obj.searchData=searchData;
			
		}
  

		obj.getSearchData=function(){
			
			return obj.searchData;
			
		}
		
	
	return obj;
	
});