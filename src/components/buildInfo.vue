<template>
    <div class="loading selectablefalse event_all">
        <div class="view">
            <div class="event_all build_close" @click="closeBuildInfoFlag">X</div>
            <div class="btn_groups">
                <td v-for="(item,index) in ['一','二','三','四']" :key="index" :class="['btn',{'active':btnActive==index}]" @click="handleSheet(index)">{{item}}单元</td>
            </div>
            <vuescroll :ops="ops">
                <table class="list parent-dom">
                    <thead class="top">
                        <tr class="child-dom wrap">
                            <td>门牌号</td><td>房屋性质</td><td>关系</td><td>姓名</td><td>性别</td>
                            <td>民族</td><td>婚姻状况</td><td>身份证号</td><td>联系方式</td>
                        </tr>
                    </thead>
                    <tr v-for="(option,i) in sheet" :key="i" class="child-dom wrap">
                        <td>{{option.mp}}</td>
                        <td>{{option.fwxz}}</td>
                        <td>{{option.gx}}</td>
                        <td>{{option.xm}}</td>
                        <td>{{option.xb}}</td>
                        <td>{{option.mz}}</td>
                        <td>{{option.hyzk}}</td>
                        <td>{{option.sfzh}}</td>
                        <td>{{option.lxfs}}</td>
                    </tr>
                </table>
            </vuescroll>
        </div>
    </div>
</template>

<script>
    import vuescroll from 'vuescroll/dist/vuescroll-native'
    import {mapMutations} from "vuex";

    export default {
        name: "buildInfo",
        components: {vuescroll},
        data() {
            return {
                ops: {
                    vuescroll: {scroller: {minZoom: 1, maxZoom: 1,}},
                    scrollPanel: {scrollingX: false,},
                    rail: {},
                    bar: {
                        keepShow: true,
                        background: '#c0c0c0'
                    },
                },
                changeH: false,
                btnActive: 0,
                sheet0:[
                    {mp:'101',fwxz:'自用',gx:'户主',xm:'马兴春',xb:'女',mz:'汉',hyzk:'已婚',sfzh:'220104197011272620',lxfs:'1304333750'},
                    {mp:'101',fwxz:'自用',gx:'儿子',xm:'迟功旋',xb:'男',mz:'汉',hyzk:'未婚',sfzh:'220381198123011115',lxfs:'1304333751'},
                    {mp:'102',fwxz:'自用',gx:'户主',xm:'宋满',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'220105195305020012',lxfs:'15404411817'},
                    {mp:'102',fwxz:'自用',gx:'妻子',xm:'于立芝',xb:'女',mz:'汉',hyzk:'已婚',sfzh:'220105195608200299',lxfs:'15404411817'},
                    {mp:'201',fwxz:'自用',gx:'户主',xm:'张文科',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'220104197308131511',lxfs:'13214491669'},
                    {mp:'201',fwxz:'自用',gx:'妻子',xm:'冯伟',xb:'女',mz:'汉',hyzk:'已婚',sfzh:'220602197608060924',lxfs:'13214491669'},
                    {mp:'201',fwxz:'自用',gx:'儿子',xm:'张永康',xb:'男',mz:'汉',hyzk:'未婚',sfzh:'220104200702016313',lxfs:'13214491669'},
                    {mp:'202',fwxz:'自用',gx:'户主',xm:'于超',xb:'女',mz:'汉',hyzk:'已婚',sfzh:'220303198208022245',lxfs:'13578866509'},
                    {mp:'202',fwxz:'自用',gx:'父亲',xm:'于万龙',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'220303194801162216',lxfs:'13578866509'},
                    {mp:'202',fwxz:'自用',gx:'母亲',xm:'梁玉珍',xb:'女',mz:'汉',hyzk:'已婚',sfzh:'220303194501092228',lxfs:'13578866509'},
                    {mp:'301',fwxz:'自用',gx:'户主',xm:'陈亚光',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'220105195701243139',lxfs:'85162956'},
                    {mp:'301',fwxz:'自用',gx:'妻子',xm:'辛冰冰',xb:'女',mz:'汉',hyzk:'已婚',sfzh:'220104196011212420',lxfs:'85162957'},
                    {mp:'301',fwxz:'自用',gx:'女儿',xm:'陈安琪',xb:'女',mz:'汉',hyzk:'未婚',sfzh:'220102199502173121',lxfs:'85162958'},
                    {mp:'302',fwxz:'自用',gx:'户主',xm:'辛珊',xb:'女',mz:'汉',hyzk:'已婚',sfzh:'22010219640130282',lxfs:'85162951'},
                    {mp:'302',fwxz:'自用',gx:'父亲',xm:'辛旭初',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'2201041930092051x',lxfs:'85162952'},
                    {mp:'401',fwxz:'自用',gx:'户主',xm:'郭强',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'220104195605102953',lxfs:'13166802383'},
                    {mp:'401',fwxz:'自用',gx:'妻子',xm:'陈红',xb:'女',mz:'汉',hyzk:'已婚',sfzh:'220102195302050620',lxfs:'13166802383'},
                    {mp:'401',fwxz:'自用',gx:'女儿',xm:'郭湘怡',xb:'男',mz:'汉',hyzk:'未婚',sfzh:'220104196402230642',lxfs:'13166802383'},
                    {mp:'401',fwxz:'自用',gx:'孙子',xm:'马林',xb:'女',mz:'汉',hyzk:'未婚',sfzh:'220202198201192418',lxfs:'13166802383'},
                    {mp:'402',fwxz:'自用',gx:'户主',xm:'刘韶辉',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'220102197512132334',lxfs:'13504473795'},
                    {mp:'402',fwxz:'自用',gx:'妻子',xm:'潘君默',xb:'女',mz:'汉',hyzk:'已婚',sfzh:'220112199208134632',lxfs:'13154302368'},
                    {mp:'402',fwxz:'自用',gx:'女儿',xm:'刘乐珍',xb:'女',mz:'汉',hyzk:'未婚',sfzh:'220106200711194266',lxfs:'13154302368'},
                    {mp:'501',fwxz:'自用',gx:'户主',xm:'李丹',xb:'女',mz:'汉',hyzk:'已婚',sfzh:'22040219791221144x',lxfs:'18686466999'},
                    {mp:'501',fwxz:'自用',gx:'丈夫',xm:'董鑫',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'220282198007285612',lxfs:'18686466999'},
                    {mp:'501',fwxz:'自用',gx:'女儿',xm:'董子琪',xb:'女',mz:'汉',hyzk:'未婚',sfzh:'220104200910563264',lxfs:'18686466999'},
                    {mp:'502',fwxz:'自用',gx:'户主',xm:'王浩',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'220104197905064417',lxfs:'85118855'},
                    {mp:'502',fwxz:'自用',gx:'妻子',xm:'赵文曦',xb:'女',mz:'汉',hyzk:'已婚',sfzh:'220103198007232122',lxfs:'85118856'},
                    {mp:'502',fwxz:'自用',gx:'儿子',xm:'王肇晨',xb:'男',mz:'汉',hyzk:'未婚',sfzh:'22010420080330631x',lxfs:'85118857'},
                    {mp:'601',fwxz:'自用',gx:'户主',xm:'李春辉',xb:'女',mz:'汉',hyzk:'已婚',sfzh:'220103196404210024',lxfs:'13944149317'},
                    {mp:'601',fwxz:'自用',gx:'丈夫',xm:'孙志国',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'220104196209103115',lxfs:'13944149317'},
                    {mp:'601',fwxz:'自用',gx:'女儿',xm:'孙荟琪',xb:'女',mz:'汉',hyzk:'未婚',sfzh:'220104199103280328',lxfs:'13944149317'},
                    {mp:'602',fwxz:'自用',gx:'户主',xm:'赵宇',xb:'女',mz:'汉',hyzk:'已婚',sfzh:'220106198901031228',lxfs:'13578867546'},
                    {mp:'701',fwxz:'自用',gx:'户主',xm:'郑爽',xb:'女',mz:'汉',hyzk:'已婚',sfzh:'220102197107031028',lxfs:'13756550155'},
                    {mp:'701',fwxz:'自用',gx:'父亲',xm:'郑新国',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'220102194107041011',lxfs:'13756550155'},
                    {mp:'701',fwxz:'自用',gx:'母亲',xm:'杨春兰',xb:'女',mz:'汉',hyzk:'已婚',sfzh:'220104194407131043',lxfs:'13756550155'},
                    {mp:'702',fwxz:'自用',gx:'户主',xm:'杜宴林',xb:'女',mz:'汉',hyzk:'已婚',sfzh:'220104197408021614',lxfs:'18004307105'},
                    {mp:'702',fwxz:'自用',gx:'岳父',xm:'周学才',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'230303195204205345',lxfs:'18004307105'},
                    {mp:'702',fwxz:'自用',gx:'岳母',xm:'肖艳',xb:'女',mz:'汉',hyzk:'已婚',sfzh:'230303195405155440',lxfs:'18004307105'},
                    {mp:'801',fwxz:'自用',gx:'户主',xm:'于海军',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'220104195209301512',lxfs:'13578768177'},
                    {mp:'801',fwxz:'自用',gx:'妻子',xm:'刘桂英',xb:'女',mz:'汉',hyzk:'已婚',sfzh:'220104195312261344',lxfs:'13578768177'},
                    {mp:'801',fwxz:'自用',gx:'女儿',xm:'于小植',xb:'女',mz:'汉',hyzk:'未婚',sfzh:'220104197810231526',lxfs:'13578768177'},
                    {mp:'802',fwxz:'自用',gx:'户主',xm:'刘超',xb:'男',mz:'汉',hyzk:'未婚',sfzh:'220104198109011230',lxfs:'13578926688'},
                    {mp:'802',fwxz:'自用',gx:'妻子',xm:'刘司',xb:'女',mz:'汉',hyzk:'已婚',sfzh:'220105198106120428',lxfs:'13578926688'},
                    {mp:'802',fwxz:'自用',gx:'儿子',xm:'刘倩华',xb:'男',mz:'汉',hyzk:'未婚',sfzh:'231003200906260022',lxfs:'13578926688'},
                    {mp:'901',fwxz:'自用',gx:'户主',xm:'姜云',xb:'女',mz:'汉',hyzk:'已婚',sfzh:'220104195608312921',lxfs:'13504328620'},
                    {mp:'901',fwxz:'自用',gx:'丈夫',xm:'李吉学',xb:'男',mz:'汉',hyzk:'未婚',sfzh:'220104196008022817',lxfs:'13504328620'},
                    {mp:'902',fwxz:'自用',gx:'户主',xm:'舟丹',xb:'女',mz:'汉',hyzk:'已婚',sfzh:'220104196610153864',lxfs:'88925678'},
                    {mp:'902',fwxz:'自用',gx:'丈夫',xm:'崔勇',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'220104196501201556',lxfs:'88925679'},
                    {mp:'902',fwxz:'自用',gx:'婆婆',xm:'程惠田',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'22010419300303152x',lxfs:'88925680'},
                ],
                sheet1:[
                    {mp:'103',fwxz:'自用',gx:'户主',xm:'李捷',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'220104193807305012',lxfs:'13596118585'},
                    {mp:'103',fwxz:'自用',gx:'妻子',xm:'徐延珍',xb:'女',mz:'汉',hyzk:'已婚',sfzh:'220104194406275048',lxfs:'13596118585'},
                    {mp:'103',fwxz:'自用',gx:'女儿',xm:'李月',xb:'女',mz:'汉',hyzk:'未婚',sfzh:'220104196806150631',lxfs:'13596118585'},
                    {mp:'104',fwxz:'自用',gx:'户主',xm:'马杰',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'142701197709156619',lxfs:'13843199866'},
                    {mp:'104',fwxz:'自用',gx:'妻子',xm:'焦平',xb:'女',mz:'汉',hyzk:'已婚',sfzh:'220581197810280365',lxfs:'13843199866'},
                    {mp:'104',fwxz:'自用',gx:'儿子',xm:'马悦博',xb:'男',mz:'汉',hyzk:'未婚',sfzh:'22010420100706633x',lxfs:'13843199866'},
                    {mp:'203',fwxz:'自用',gx:'岳母',xm:'金耀霞',xb:'女',mz:'汉',hyzk:'已婚',sfzh:'220519195207290369',lxfs:'13843199866'},
                    {mp:'203',fwxz:'自用',gx:'户主',xm:'付研',xb:'女',mz:'满',hyzk:'已婚',sfzh:'220104195607205004',lxfs:'13321413799'},
                    {mp:'203',fwxz:'自用',gx:'丈夫',xm:'姚树仁',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'220104195701110013',lxfs:'13321413799'},
                    {mp:'203',fwxz:'自用',gx:'女儿',xm:'姚旭航',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'220104198301090029',lxfs:'13321413799'},
                    {mp:'204',fwxz:'自用',gx:'户主',xm:'胡承慧',xb:'女',mz:'汉',hyzk:'已婚',sfzh:'220102196611233229',lxfs:'13364547809'},
                    {mp:'204',fwxz:'自用',gx:'丈夫',xm:'崔景泉',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'220104196511131635',lxfs:'13364547809'},
                    {mp:'204',fwxz:'自用',gx:'儿子',xm:'崔亮宁',xb:'男',mz:'汉',hyzk:'未婚',sfzh:'220104199503090611',lxfs:'13364547809'},
                    {mp:'303',fwxz:'自用',gx:'户主',xm:'尹曦日',xb:'男',mz:'汉',hyzk:'未婚',sfzh:'2201065198909109228',lxfs:'15104470881'},
                    {mp:'303',fwxz:'自用',gx:'妻子',xm:'文锦女',xb:'女',mz:'朝鲜',hyzk:'未婚',sfzh:'210624194012253947',lxfs:'15104470881'},
                    {mp:'303',fwxz:'自用',gx:'丈夫',xm:'尹在根',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'21062419370427391x',lxfs:'15104470881'},
                    {mp:'304',fwxz:'自用',gx:'户主',xm:'姚生',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'2201041944011163113',lxfs:'85181806'},
                    {mp:'304',fwxz:'自用',gx:'妻子',xm:'赵丽清',xb:'女',mz:'汉',hyzk:'已婚',sfzh:'220104194202183125',lxfs:'85181806'},
                    {mp:'403',fwxz:'自用',gx:'户主',xm:'刘子赫',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'220102198109109196',lxfs:'13704317069'},
                    {mp:'404',fwxz:'自用',gx:'户主',xm:'刘军',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'22010419580601035x',lxfs:'13596458388'},
                    {mp:'404',fwxz:'自用',gx:'妻子',xm:'孙义红',xb:'女',mz:'汉',hyzk:'已婚',sfzh:'220104196003200323',lxfs:'13596458388'},
                    {mp:'404',fwxz:'自用',gx:'女儿',xm:'刘雨农',xb:'女',mz:'汉',hyzk:'未婚',sfzh:'22010419980525036x',lxfs:'13596458388'},
                    {mp:'503',fwxz:'自用',gx:'户主',xm:'王青华',xb:'女',mz:'汉',hyzk:'已婚',sfzh:'220202197709091867',lxfs:'13074351988'},
                    {mp:'503',fwxz:'自用',gx:'丈夫',xm:'李河',xb:'男',mz:'满',hyzk:'已婚',sfzh:'132629197303278017',lxfs:'13074351988'},
                    {mp:'503',fwxz:'自用',gx:'儿子',xm:'李俊铺',xb:'女',mz:'汉',hyzk:'未婚',sfzh:'220104200912116312',lxfs:'13074351988'},
                    {mp:'503',fwxz:'自用',gx:'岳父',xm:'王庭武',xb:'女',mz:'汉',hyzk:'已婚',sfzh:'220202194910221316',lxfs:'13074351988'},
                    {mp:'503',fwxz:'自用',gx:'岳母',xm:'刘大双',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'220202195202211322',lxfs:'13074351988'},
                    {mp:'504',fwxz:'自用',gx:'户主',xm:'苗薇薇',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'220104197312051311',lxfs:'13500895963'},
                    {mp:'504',fwxz:'自用',gx:'妻子',xm:'张耀园',xb:'女',mz:'汉',hyzk:'已婚',sfzh:'220104197804111528',lxfs:'13500895963'},
                    {mp:'603',fwxz:'自用',gx:'户主',xm:'李英',xb:'女',mz:'汉',hyzk:'已婚',sfzh:'220104197818134730',lxfs:'13596199567'},
                    {mp:'603',fwxz:'自用',gx:'丈夫',xm:'张建壮',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'220102197904015522',lxfs:'13596199567'},
                    {mp:'604',fwxz:'自用',gx:'户主',xm:'李爽',xb:'女',mz:'汉',hyzk:'已婚',sfzh:'220103197209290625',lxfs:'13578767817'},
                    {mp:'703',fwxz:'自用',gx:'户主',xm:'安成皓',xb:'男',mz:'汉',hyzk:'未婚',sfzh:'M51416472',lxfs:'13394481572'},
                    {mp:'703',fwxz:'自用',gx:'弟弟',xm:'安成眠',xb:'男',mz:'汉',hyzk:'未婚',sfzh:'M52410041',lxfs:'13394481572'},
                    {mp:'704',fwxz:'自用',gx:'户主',xm:'李丽',xb:'女',mz:'汉',hyzk:'未婚',sfzh:'142401198908080029',lxfs:'13069123277'},
                    {mp:'803',fwxz:'自用',gx:'户主',xm:'刘宇峰',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'220181197909060635',lxfs:'85150515'},
                    {mp:'803',fwxz:'自用',gx:'妻子',xm:'张丹',xb:'女',mz:'汉',hyzk:'已婚',sfzh:'220323198012140026',lxfs:'85150515'},
                    {mp:'803',fwxz:'自用',gx:'儿子',xm:'刘温齐',xb:'男',mz:'汉',hyzk:'未婚',sfzh:'220104200808206211',lxfs:'85150515'},
                    {mp:'804',fwxz:'自用',gx:'户主',xm:'孔辉',xb:'女',mz:'汉',hyzk:'未婚',sfzh:'220102197308153128',lxfs:'85177977'},
                    {mp:'903',fwxz:'自用',gx:'户主',xm:'王凤金',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'220103194612182532',lxfs:'13944804616'},
                    {mp:'903',fwxz:'自用',gx:'租户',xm:'马玉芹',xb:'女',mz:'汉',hyzk:'已婚',sfzh:'220103194912052529',lxfs:'13944804616'},
                    {mp:'903',fwxz:'自用',gx:'租户',xm:'林帅',xb:'女',mz:'汉',hyzk:'已婚',sfzh:'220103196801231048',lxfs:'13944804616'},
                    {mp:'903',fwxz:'自用',gx:'租户',xm:'王德',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'371083198608276024',lxfs:'13944804616'},
                    {mp:'903',fwxz:'自用',gx:'租户',xm:'王博裕',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'220103197406152512',lxfs:'13944804616'},
                    {mp:'904',fwxz:'自用',gx:'户主',xm:'邹继生',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'220104197508131516',lxfs:'13604366677'},
                    {mp:'105',fwxz:'自用',gx:'户主',xm:'张涛',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'22012019800109081x',lxfs:'85228155'},
                    {mp:'105',fwxz:'自用',gx:'父亲',xm:'张三有',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'220103195201171219',lxfs:'85228156'},
                    {mp:'105',fwxz:'自用',gx:'母亲',xm:'邱俊兰',xb:'女',mz:'汉',hyzk:'已婚',sfzh:'220103195706251222',lxfs:'85228157'},
                    {mp:'106',fwxz:'自用',gx:'户主',xm:'邢军',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'22010319730117351x',lxfs:'13069108800'},
                    {mp:'305',fwxz:'自用',gx:'户主',xm:'付刚',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'220104198101081339',lxfs:'13353116858'},
                    {mp:'306',fwxz:'自用',gx:'户主',xm:'满桂英',xb:'女',mz:'回',hyzk:'已婚',sfzh:'220104194111170927',lxfs:'13944108172'},
                    {mp:'306',fwxz:'自用',gx:'丈夫',xm:'李福田',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'220104194104240958',lxfs:'13944108172'},
                    {mp:'306',fwxz:'自用',gx:'女儿',xm:'李信杰',xb:'女',mz:'汉',hyzk:'已婚',sfzh:'220104196908140927',lxfs:'13944108172'},
                    {mp:'306',fwxz:'自用',gx:'女儿',xm:'李信利',xb:'女',mz:'汉',hyzk:'已婚',sfzh:'220104197204190920',lxfs:'13944108172'},
                    {mp:'505',fwxz:'自用',gx:'户主',xm:'马春杰',xb:'女',mz:'汉',hyzk:'已婚',sfzh:'220104196804225029',lxfs:'13943046965'},
                    {mp:'505',fwxz:'自用',gx:'丈夫',xm:'朱冬元',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'220104196410145018',lxfs:'13943046965'},
                    {mp:'505',fwxz:'自用',gx:'女儿',xm:'朱肤莹',xb:'女',mz:'汉',hyzk:'已婚',sfzh:'220104199208255022',lxfs:'13943046965'},
                    {mp:'506',fwxz:'自用',gx:'户主',xm:'陈秉公',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'220104194111061317',lxfs:'13578921202'},
                    {mp:'506',fwxz:'自用',gx:'妻子',xm:'柳桂荣',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'220104194306111329',lxfs:'13578921202'},
                    {mp:'506',fwxz:'自用',gx:'儿子',xm:'陈郁',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'220104196806281315',lxfs:'13578921202'},
                    {mp:'705',fwxz:'自用',gx:'户主',xm:'高宇',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'220102196711153713',lxfs:'13074369093'},
                    {mp:'705',fwxz:'自用',gx:'妻子',xm:'曹海燕',xb:'女',mz:'汉',hyzk:'已婚',sfzh:'320111197301290024',lxfs:'13074369093'},
                    {mp:'705',fwxz:'自用',gx:'儿子',xm:'高建杭',xb:'男',mz:'汉',hyzk:'未婚',sfzh:'220104200506290010',lxfs:'13074369093'},
                    {mp:'706',fwxz:'自用',gx:'户主',xm:'李仁',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'220903196401220335',lxfs:'1365434373488'},
                    {mp:'905',fwxz:'自用',gx:'户主',xm:'陈建',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'220104197607287815',lxfs:'18686697288'},
                    {mp:'905',fwxz:'自用',gx:'妻子',xm:'李晓利',xb:'女',mz:'汉',hyzk:'已婚',sfzh:'231005197807280531',lxfs:'18686697288'},
                    {mp:'905',fwxz:'自用',gx:'女儿',xm:'陈加蜜',xb:'男',mz:'汉',hyzk:'未婚',sfzh:'220104201404090029',lxfs:'18686697288'},
                    {mp:'906',fwxz:'自用',gx:'户主',xm:'刘凯',xb:'女',mz:'汉',hyzk:'已婚',sfzh:'230602197804233628',lxfs:'13500825144'},
                    {mp:'906',fwxz:'自用',gx:'丈夫',xm:'耿强',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'220104197501158433',lxfs:'13500825144'},
                    {mp:'906',fwxz:'自用',gx:'女儿',xm:'耿梦媛',xb:'男',mz:'汉',hyzk:'未婚',sfzh:'220104201309166328',lxfs:'13500825144'},
                    {mp:'107',fwxz:'自用',gx:'户主',xm:'林淑芝',xb:'女',mz:'汉',hyzk:'已婚',sfzh:'22010219550102445x',lxfs:'1350081799'},
                    {mp:'107',fwxz:'自用',gx:'丈夫',xm:'王成斌',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'220102195402010212',lxfs:'1350081799'},
                    {mp:'108',fwxz:'自用',gx:'户主',xm:'吴文新',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'342823196811024811',lxfs:'18946732733'},
                    {mp:'108',fwxz:'自用',gx:'妻子',xm:'郭本霞',xb:'女',mz:'汉',hyzk:'已婚',sfzh:'340122197001105001',lxfs:'18946732733'},
                    {mp:'108',fwxz:'自用',gx:'女儿',xm:'吴皖凤',xb:'女',mz:'汉',hyzk:'未婚',sfzh:'220103199505121048',lxfs:'18946732733'},
                    {mp:'108',fwxz:'自用',gx:'儿子',xm:'郭伟',xb:'男',mz:'汉',hyzk:'未婚',sfzh:'220103200112041048',lxfs:'18946732733'},
                    {mp:'207',fwxz:'自用',gx:'户主',xm:'孙锡才',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'220103194202031037',lxfs:'85189585'},
                    {mp:'207',fwxz:'自用',gx:'妻子',xm:'杨桂芬',xb:'女',mz:'汉',hyzk:'已婚',sfzh:'220103194408171027',lxfs:'85189586'},
                    {mp:'208',fwxz:'自用',gx:'户主',xm:'陈光',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'220302195406172411',lxfs:'13904915996'},
                    {mp:'307',fwxz:'自用',gx:'户主',xm:'曲铁',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'22010419691229091x',lxfs:'13943068448'},
                    {mp:'307',fwxz:'自用',gx:'妻子',xm:'汪丽',xb:'女',mz:'汉',hyzk:'已婚',sfzh:'220104196905110925',lxfs:'13943068448'},
                    {mp:'307',fwxz:'自用',gx:'儿子',xm:'曲金元',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'220104199512140908',lxfs:'13943068448'},
                ],
                sheet2:[
                    {mp:'105',fwxz:'自用',gx:'户主',xm:'张涛',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'22012019800109081x',lxfs:'85228155'},
                    {mp:'105',fwxz:'自用',gx:'父亲',xm:'张三有',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'220103195201171219',lxfs:'85228156'},
                    {mp:'105',fwxz:'自用',gx:'母亲',xm:'邱俊兰',xb:'女',mz:'汉',hyzk:'已婚',sfzh:'220103195706251222',lxfs:'85228157'},
                    {mp:'106',fwxz:'自用',gx:'户主',xm:'邢军',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'22010319730117351x',lxfs:'13069108800'},
                    {mp:'305',fwxz:'自用',gx:'户主',xm:'付刚',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'220104198101081339',lxfs:'13353116858'},
                    {mp:'306',fwxz:'自用',gx:'户主',xm:'满桂英',xb:'女',mz:'回',hyzk:'已婚',sfzh:'220104194111170927',lxfs:'13944108172'},
                    {mp:'306',fwxz:'自用',gx:'丈夫',xm:'李福田',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'220104194104240958',lxfs:'13944108172'},
                    {mp:'306',fwxz:'自用',gx:'女儿',xm:'李信杰',xb:'女',mz:'汉',hyzk:'已婚',sfzh:'220104196908140927',lxfs:'13944108172'},
                    {mp:'306',fwxz:'自用',gx:'女儿',xm:'李信利',xb:'女',mz:'汉',hyzk:'已婚',sfzh:'220104197204190920',lxfs:'13944108172'},
                    {mp:'505',fwxz:'自用',gx:'户主',xm:'马春杰',xb:'女',mz:'汉',hyzk:'已婚',sfzh:'220104196804225029',lxfs:'13943046965'},
                    {mp:'505',fwxz:'自用',gx:'丈夫',xm:'朱冬元',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'220104196410145018',lxfs:'13943046965'},
                    {mp:'505',fwxz:'自用',gx:'女儿',xm:'朱肤莹',xb:'女',mz:'汉',hyzk:'已婚',sfzh:'220104199208255022',lxfs:'13943046965'},
                    {mp:'506',fwxz:'自用',gx:'户主',xm:'陈秉公',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'220104194111061317',lxfs:'13578921202'},
                    {mp:'506',fwxz:'自用',gx:'妻子',xm:'柳桂荣',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'220104194306111329',lxfs:'13578921202'},
                    {mp:'506',fwxz:'自用',gx:'儿子',xm:'陈郁',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'220104196806281315',lxfs:'13578921202'},
                    {mp:'705',fwxz:'自用',gx:'户主',xm:'高宇',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'220102196711153713',lxfs:'13074369093'},
                    {mp:'705',fwxz:'自用',gx:'妻子',xm:'曹海燕',xb:'女',mz:'汉',hyzk:'已婚',sfzh:'320111197301290024',lxfs:'13074369093'},
                    {mp:'705',fwxz:'自用',gx:'儿子',xm:'高建杭',xb:'男',mz:'汉',hyzk:'未婚',sfzh:'220104200506290010',lxfs:'13074369093'},
                    {mp:'706',fwxz:'自用',gx:'户主',xm:'李仁',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'220903196401220335',lxfs:'1365434373488'},
                    {mp:'905',fwxz:'自用',gx:'户主',xm:'陈建',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'220104197607287815',lxfs:'18686697288'},
                    {mp:'905',fwxz:'自用',gx:'妻子',xm:'李晓利',xb:'女',mz:'汉',hyzk:'已婚',sfzh:'231005197807280531',lxfs:'18686697288'},
                    {mp:'905',fwxz:'自用',gx:'女儿',xm:'陈加蜜',xb:'男',mz:'汉',hyzk:'未婚',sfzh:'220104201404090029',lxfs:'18686697288'},
                    {mp:'906',fwxz:'自用',gx:'户主',xm:'刘凯',xb:'女',mz:'汉',hyzk:'已婚',sfzh:'230602197804233628',lxfs:'13500825144'},
                    {mp:'906',fwxz:'自用',gx:'丈夫',xm:'耿强',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'220104197501158433',lxfs:'13500825144'},
                    {mp:'906',fwxz:'自用',gx:'女儿',xm:'耿梦媛',xb:'男',mz:'汉',hyzk:'未婚',sfzh:'220104201309166328',lxfs:'13500825144'},
                    {mp:'107',fwxz:'自用',gx:'户主',xm:'林淑芝',xb:'女',mz:'汉',hyzk:'已婚',sfzh:'22010219550102445x',lxfs:'1350081799'},
                    {mp:'107',fwxz:'自用',gx:'丈夫',xm:'王成斌',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'220102195402010212',lxfs:'1350081799'},
                    {mp:'108',fwxz:'自用',gx:'户主',xm:'吴文新',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'342823196811024811',lxfs:'18946732733'},
                    {mp:'108',fwxz:'自用',gx:'妻子',xm:'郭本霞',xb:'女',mz:'汉',hyzk:'已婚',sfzh:'340122197001105001',lxfs:'18946732733'},
                    {mp:'108',fwxz:'自用',gx:'女儿',xm:'吴皖凤',xb:'女',mz:'汉',hyzk:'未婚',sfzh:'220103199505121048',lxfs:'18946732733'},
                    {mp:'108',fwxz:'自用',gx:'儿子',xm:'郭伟',xb:'男',mz:'汉',hyzk:'未婚',sfzh:'220103200112041048',lxfs:'18946732733'},
                    {mp:'207',fwxz:'自用',gx:'户主',xm:'孙锡才',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'220103194202031037',lxfs:'85189585'},
                    {mp:'207',fwxz:'自用',gx:'妻子',xm:'杨桂芬',xb:'女',mz:'汉',hyzk:'已婚',sfzh:'220103194408171027',lxfs:'85189586'},
                    {mp:'208',fwxz:'自用',gx:'户主',xm:'陈光',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'220302195406172411',lxfs:'13904915996'},
                    {mp:'307',fwxz:'自用',gx:'户主',xm:'曲铁',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'22010419691229091x',lxfs:'13943068448'},
                    {mp:'307',fwxz:'自用',gx:'妻子',xm:'汪丽',xb:'女',mz:'汉',hyzk:'已婚',sfzh:'220104196905110925',lxfs:'13943068448'},
                    {mp:'307',fwxz:'自用',gx:'儿子',xm:'曲金元',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'220104199512140908',lxfs:'13943068448'},
                ],
                sheet3:[
                    {mp:'107',fwxz:'自用',gx:'户主',xm:'林淑芝',xb:'女',mz:'汉',hyzk:'已婚',sfzh:'22010219550102445x',lxfs:'1350081799'},
                    {mp:'107',fwxz:'自用',gx:'丈夫',xm:'王成斌',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'220102195402010212',lxfs:'1350081799'},
                    {mp:'108',fwxz:'自用',gx:'户主',xm:'吴文新',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'342823196811024811',lxfs:'18946732733'},
                    {mp:'108',fwxz:'自用',gx:'妻子',xm:'郭本霞',xb:'女',mz:'汉',hyzk:'已婚',sfzh:'340122197001105001',lxfs:'18946732733'},
                    {mp:'108',fwxz:'自用',gx:'女儿',xm:'吴皖凤',xb:'女',mz:'汉',hyzk:'未婚',sfzh:'220103199505121048',lxfs:'18946732733'},
                    {mp:'108',fwxz:'自用',gx:'儿子',xm:'郭伟',xb:'男',mz:'汉',hyzk:'未婚',sfzh:'220103200112041048',lxfs:'18946732733'},
                    {mp:'207',fwxz:'自用',gx:'户主',xm:'孙锡才',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'220103194202031037',lxfs:'85189585'},
                    {mp:'207',fwxz:'自用',gx:'妻子',xm:'杨桂芬',xb:'女',mz:'汉',hyzk:'已婚',sfzh:'220103194408171027',lxfs:'85189586'},
                    {mp:'208',fwxz:'自用',gx:'户主',xm:'陈光',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'220302195406172411',lxfs:'13904915996'},
                    {mp:'307',fwxz:'自用',gx:'户主',xm:'曲铁',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'22010419691229091x',lxfs:'13943068448'},
                    {mp:'307',fwxz:'自用',gx:'妻子',xm:'汪丽',xb:'女',mz:'汉',hyzk:'已婚',sfzh:'220104196905110925',lxfs:'13943068448'},
                    {mp:'307',fwxz:'自用',gx:'儿子',xm:'曲金元',xb:'男',mz:'汉',hyzk:'已婚',sfzh:'220104199512140908',lxfs:'13943068448'},
                ],
            }
        },
        computed: {
            table() {
                return this.$store.state.buildInfoTable;
            }
        },
        methods: {
            ...mapMutations(["closeBuildInfoFlag"]),
            handleSheet(index){
                this.btnActive = index
                this.sheet = this['sheet'+index]
            }
        },
        created(){
          this.sheet = this.sheet0
        },
        mounted() {
            let that = this
            setTimeout(function () {
                that.changeH = true
            }, 1000)
        }
    }
</script>

<style scoped lang="scss">
    .loading {
        z-index: 3;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .view {
        position: relative;
        overflow: hidden;
        width: 1210px;
        height: 100%;
        margin: auto;
        padding: 7% 58px 10%;
        box-sizing: border-box;
        color: #fff;
        background: url("../../public/image/boxBd.png") no-repeat;
        background-size: 100% 100%;
        animation: bounce-in .7s;

        .build_close {
            color: black;
            text-align: center;
            cursor: pointer;
            position: absolute;
            right: 50px;
            top: 80px;
            background: steelblue;
            width: 60px;
            border-radius: 5px;
        }

        .build_close:hover {
            background: cornflowerblue;
        }

        .btn_groups {
            padding: 5px 0;
            width: 100%;
            display: flex;
            justify-content: center;
            .btn{
                cursor: pointer;
                background: steelblue;
                padding: 3px 8px;
                margin: 0 30px;
                border-radius: 5px;
            }
            .active{
                background: cornflowerblue;
            }
        }

        .list {
            text-align: center;
            font-size: 19px;
            width: 100%;
            height: calc(100% - 30px);
            .top{
                background: rgba(255,255,255,0.35);
            }
        }
    }
    @keyframes bounce-in {
        0% {
            transform: scale(0);
            opacity: 0;
        }
        70% {
            transform: scale(1.15);
            opacity: 1;
        }
        100% {
            transform: scale(1);
        }
    }
</style>