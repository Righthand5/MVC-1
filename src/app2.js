import  $ from 'jquery'
import './app2.css'

const $tabBar  = $('#app2 .tab-bar')
const $tabContent = $('#app2 .tab-content')

$tabBar.on('click','li',(e)=>{
    const  $li = $(e.currentTarget)
    $li
        .addClass('selected')
        .siblings()
        .removeClass("selected")
    const index = $li.index()
    console.log(index)

    $tabContent
        .children()
        .eq(index).addClass('active')
        .siblings().removeClass('active')
        // .eq(index).css({display:'block'})
        // .siblings().css({display:'none'})
})//事件委托，监听父元素

$tabBar.children().eq(0).trigger('click')//自己点击