'use strict';

(function(){
	
	var pageIndex  = 0;
	var totalPages = 0;

	var getNumberOfPages = function(){
		return $('article.content__item').size();
	}

	var makePageActive = function(pageIndex){
		$('article.content__item').eq(pageIndex).addClass('content__item--show');
	}

	var hideAllPagesByDefault = function(){
		$('article.content__item').removeClass('content__item--show');
	}

	var hideOtherPages = function(pageIndex){
		$('article.content__item').eq(pageIndex).siblings().removeClass('content__item--show');
	}

	var setPageIndex = function(pIndex){
		pageIndex = pIndex;
		makePageActive(pageIndex);
		hideOtherPages(pageIndex);
	}

	var getNextPageIndex = function(){
		return pageIndex++;
	}

	var getPrevPageIndex = function(){
		return pageIndex--  > 0  ? pageIndex : 0;
	}

	//hideAllPagesByDefault();
	totalPages = getNumberOfPages();


	$(document).ready(function(){
		$('.pager').on('click', function(){

			var pageType = $(this).attr('data-page-type');

			if(pageType === 'next'){
				getNextPageIndex();
			}
			else{
				getPrevPageIndex();
			}

			makePageActive(pageIndex);
			hideOtherPages(pageIndex)
		});

		$('.grid__item').on('click', function(){
			var pIndex = setPageIndex($('.grid__item').index(this));
		})
	})

})();