import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const texto = document.createElement('div');
texto.innerHTML = `
<br/><br/><br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur nibh arcu. Maecenas eu euismod lorem. Proin fermentum semper ex. Pellentesque bibendum convallis sodales. Nulla facilisi. Phasellus rutrum, justo sed laoreet tempus, purus lectus congue nunc, ac euismod ante ligula accumsan tellus. Sed vitae sapien at nisi accumsan accumsan vitae at risus. Phasellus sodales turpis ac tellus placerat, suscipit finibus magna scelerisque. Sed mattis sem eget ipsum imperdiet, non blandit enim pulvinar. Nullam blandit massa vitae tortor varius, vitae maximus sapien efficitur. Phasellus vitae facilisis dolor. Curabitur et diam sit amet eros porta consequat vitae at lacus.
<br/><br/><br/>
Ut hendrerit massa dui, vel aliquet nunc bibendum non. Fusce et justo vel lectus placerat euismod. Nunc vitae velit in libero scelerisque euismod id non libero. Duis et sagittis augue. In eleifend nibh et placerat vehicula. Vestibulum placerat rutrum ex consectetur vestibulum. Phasellus ut convallis massa. Morbi tincidunt blandit velit. Sed non leo sapien. Vivamus tempus mollis enim, at euismod eros fringilla sit amet. Aenean ut arcu diam. Sed venenatis libero est, at scelerisque lacus lobortis gravida. Praesent nec molestie quam, ac imperdiet nulla. Etiam eu facilisis massa. Integer sem nibh, tincidunt non lacus eu, vehicula congue orci.
<br/><br/><br/>
Donec suscipit neque vel tristique placerat. Pellentesque fringilla vel orci nec tincidunt. Vestibulum turpis mauris, posuere non sem sit amet, condimentum interdum arcu. Quisque egestas efficitur arcu at congue. In id pharetra arcu. Cras sed posuere dui. Vestibulum faucibus mauris vitae ornare pulvinar. Aliquam placerat bibendum massa vel semper. Fusce ac venenatis ligula. Donec eu ante non odio ultricies egestas vitae in nulla. Vivamus sagittis eros orci, nec faucibus erat malesuada nec. Phasellus laoreet, augue sit amet pharetra auctor, metus lectus vehicula lorem, at blandit arcu enim eget orci. Curabitur quis accumsan dolor. Suspendisse a erat enim. Sed vitae mi tempus, fringilla turpis vulputate, accumsan mi.
<br/><br/><br/>
Aenean nec mi a orci consectetur lobortis eu sodales felis. Mauris mauris ex, rutrum non eleifend eu, viverra non turpis. In hac habitasse platea dictumst. Cras interdum urna dui, sed molestie urna tincidunt in. Quisque id lacinia orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean varius blandit erat sit amet porta. Integer vitae massa nulla. Fusce tristique nisi a magna suscipit, in fringilla arcu cursus.
<br/><br/><br/>
Mauris sit amet metus vitae nunc vulputate pharetra. Nulla vel lorem turpis. In hac habitasse platea dictumst. Donec placerat neque a odio euismod maximus. Duis consequat sapien ornare mattis commodo. Nulla venenatis, ex varius laoreet faucibus, est libero porttitor mi, quis venenatis odio lacus ut nisl. Phasellus ipsum enim, condimentum sed pharetra nec, blandit eleifend nibh. Proin sed magna metus. Maecenas sollicitudin quis massa id sollicitudin. Sed at mi ligula. Suspendisse hendrerit rhoncus sem in sodales. Duis eu magna dapibus, finibus odio id, maximus massa. Integer dictum ante eu neque elementum pharetra.
<br/><br/><br/>
Proin vulputate hendrerit felis sit amet volutpat. Cras vel ex eget risus elementum aliquam sit amet sed odio. Praesent sed elit euismod, laoreet mi sit amet, egestas arcu. Integer mattis hendrerit risus id maximus. Quisque sit amet rhoncus odio, non rutrum erat. Donec ultricies aliquet ante, sit amet accumsan sapien pretium vel. Proin mollis metus at sagittis semper. Cras vel quam tempus, vulputate justo auctor, iaculis velit. Nullam at urna nec neque sodales hendrerit. Vivamus vulputate nec tellus sit amet dignissim. Maecenas vel mollis nisl. Nulla facilisi. Quisque accumsan diam sit amet tempor pharetra. Maecenas ultricies ante non euismod pellentesque. Suspendisse id tellus sit amet dui mollis ornare. Maecenas pellentesque ultrices diam.
<br/><br/><br/>
Duis dignissim nec libero ut suscipit. Duis eget leo erat. Suspendisse potenti. Aliquam auctor porta massa, id pretium quam facilisis vitae. Integer aliquet, neque non ultrices consectetur, erat lacus gravida eros, a rutrum sem ex ac purus. Sed mollis viverra erat, sed posuere leo cursus quis. Duis imperdiet lorem maximus cursus varius. Aenean tellus lacus, ullamcorper vitae sem vel, rhoncus cursus ligula. Praesent at dolor volutpat, suscipit nunc dictum, hendrerit nunc. Pellentesque ultricies sodales erat, a venenatis massa pretium a. Nulla rhoncus efficitur sem, a imperdiet purus finibus vitae. Curabitur tristique commodo diam ac convallis. Fusce mattis massa sem, eu fermentum tellus mollis ac. Donec nisi enim, bibendum in vehicula id, facilisis nec sapien. Vivamus venenatis rhoncus sollicitudin.
<br/><br/><br/>
Nullam porta eu lacus eget pulvinar. Aenean ultrices ultricies bibendum. Cras posuere lectus sed turpis dapibus ultrices. Nullam cursus venenatis tincidunt. Etiam tempus faucibus pellentesque. Nam tristique orci ac augue tristique dignissim. Duis imperdiet tortor pretium neque sollicitudin, vehicula commodo ex feugiat. Suspendisse sed justo semper, tincidunt nibh in, hendrerit augue. Aenean a ultrices turpis. Aliquam tincidunt lorem pellentesque, maximus leo at, laoreet diam. Donec tempor blandit enim, eu ultricies nunc condimentum nec. Duis nec dapibus odio, nec iaculis purus. Proin ornare erat quis purus hendrerit, in iaculis ante luctus. Cras tincidunt, tellus quis porta tempor, nunc magna euismod mauris, id sollicitudin nibh ipsum eu diam. Sed eu tincidunt felis.
<br/><br/><br/>
Duis nec dolor ut tellus ullamcorper porta quis nec neque. Aliquam at hendrerit augue. Maecenas libero purus, semper id fermentum a, fermentum ut lectus. Maecenas dapibus accumsan erat. Cras sed neque libero. Sed sit amet sem turpis. Vestibulum finibus magna erat, blandit consequat est tincidunt sed. In laoreet quam eget euismod vehicula. In hac habitasse platea dictumst. Nunc non libero ante. Nulla nec nunc vehicula, eleifend dui nec, consequat justo.
<br/><br/><br/>
Aenean vitae urna lorem. Sed porttitor tellus quis turpis rutrum, sit amet pulvinar mi sollicitudin. Pellentesque sed nisl urna. Suspendisse eu massa a odio mattis lobortis quis id dolor. Aliquam eu gravida leo, sit amet convallis elit. Pellentesque euismod neque diam, eu egestas leo elementum in. Integer vel porttitor sem. Nunc at tristique purus, in lobortis nibh. Ut posuere lacinia eros, nec condimentum urna facilisis a. Cras eleifend efficitur vulputate. Duis sodales nisl sed cursus eleifend. Fusce bibendum, nisi vel sollicitudin cursus, felis mi varius nisi, vel placerat tellus nunc viverra lectus.
<br/><br/><br/>
Duis consectetur ligula elit, vel tincidunt mauris tristique nec. Praesent vulputate vel odio sed aliquet. Nullam consectetur nibh ac lobortis malesuada. Aenean efficitur tempor odio ut facilisis. Vivamus non posuere neque. Nam nisi nisi, suscipit non consequat a, pretium sit amet metus. Integer pharetra arcu sem, ac vestibulum leo posuere eget. Nam vitae consectetur purus, non commodo neque. Morbi rhoncus ipsum quis sem vestibulum ultricies. Sed est lectus, tempor ac feugiat id, aliquam at neque. Vivamus at vulputate neque. Quisque lobortis orci non sapien porttitor, ac ornare nunc consequat. Proin sed neque ut erat lobortis feugiat. Nullam quis justo purus. Donec finibus orci ac pretium laoreet. Aenean at interdum metus.
<br/><br/><br/>
Aenean sem nisl, viverra egestas ipsum sed, vehicula sodales purus. Duis fermentum erat eget dolor posuere, sit amet volutpat mi aliquam. Nulla sed blandit ex. Donec ut feugiat nisi. Sed finibus lacinia felis sit amet ultricies. In in eleifend nisi. Sed condimentum ex eget velit dictum dignissim. Aliquam condimentum tempus accumsan. Donec non purus sem. Sed at fermentum dolor. Phasellus in egestas lectus. Aenean vitae semper velit, non pulvinar metus. Ut vitae elit ullamcorper, aliquam elit at, fringilla lorem.
<br/><br/><br/>
Suspendisse id mi a odio lacinia mattis finibus ac urna. In condimentum libero non dui consectetur fringilla. Proin rhoncus nulla tortor, vitae bibendum dolor tristique eu. Vestibulum laoreet odio non ligula porta, sit amet finibus turpis efficitur. Integer auctor lectus ac mauris sodales, eget elementum lacus lacinia. Quisque ac maximus neque. Donec auctor a nunc cursus tempus. Cras volutpat, sapien ut consectetur tincidunt, arcu nisl interdum purus, id ornare enim nisi sit amet purus.
<br/><br/><br/>
Fusce pellentesque nulla ipsum, vel tristique magna mollis vel. Pellentesque quis odio pellentesque, ultricies quam vel, semper libero. Mauris interdum gravida enim, ut egestas urna dignissim nec. Fusce ornare rhoncus fermentum. Phasellus luctus velit non nulla porta convallis. Donec ligula tortor, tristique id mauris vel, lobortis scelerisque tellus. Mauris venenatis mauris ut justo pharetra porta quis non neque. Nunc quis lectus nunc. Praesent dignissim diam id risus gravida pharetra. Quisque massa tortor, auctor nec nibh in, sollicitudin euismod nisi. Sed blandit mi a odio tristique porta a quis est. Curabitur tempor dolor volutpat est dapibus lobortis. Nulla vehicula dui at tellus egestas, in laoreet velit faucibus. Duis dictum turpis ut enim hendrerit pharetra. Integer vel sapien nibh. Ut vitae malesuada erat.
<br/><br/><br/>
Integer quis magna a elit posuere pharetra ut id quam. Vestibulum feugiat vel purus nec dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent id eros purus. Proin ornare dui ac est tempus dapibus. Pellentesque tincidunt enim nibh, in congue risus pharetra nec. Pellentesque cursus dui sem, sit amet efficitur diam fringilla vitae.
<br/><br/><br/>
Pellentesque lacinia lacus in eleifend congue. Phasellus interdum velit massa, ut tincidunt neque consectetur hendrerit. Curabitur feugiat arcu eget magna lacinia, ut viverra ipsum tempor. Aenean justo odio, cursus sed tincidunt nec, iaculis a lectus. Quisque id augue tortor. Morbi vulputate enim leo, vitae ultrices risus tempor vel. Curabitur feugiat nisl faucibus tortor consectetur cursus. Proin a accumsan eros, vel dapibus lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur mi risus, vulputate eget imperdiet vestibulum, porta sed ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas a aliquam ligula.
<br/><br/><br/>
Sed faucibus, dui in commodo cursus, risus augue efficitur eros, eget facilisis enim metus et felis. Morbi luctus accumsan purus, ac varius nisl porta et. Sed vitae lacus blandit, feugiat nulla sit amet, luctus mauris. Nullam malesuada semper dui quis ultricies. Nunc aliquam nunc nec dolor gravida sodales. Aliquam ac tellus scelerisque, hendrerit quam vel, feugiat orci. Suspendisse ac eros vitae massa bibendum feugiat.
<br/><br/><br/>
Pellentesque vitae gravida metus. In hac habitasse platea dictumst. Suspendisse id purus a sem luctus feugiat. Etiam blandit ipsum turpis, scelerisque pulvinar ipsum eleifend eu. Sed dictum, ex vel bibendum accumsan, est leo commodo mi, et ullamcorper neque sapien id magna. Curabitur est velit, consectetur quis faucibus nec, finibus ut nisl. Ut sollicitudin mi ac tincidunt condimentum. Sed eget lectus sagittis, tempor magna at, auctor tellus. Vivamus volutpat condimentum cursus. Proin ac justo vel orci suscipit dapibus bibendum vel mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
<br/><br/><br/>
Proin volutpat varius commodo. Sed elit nisi, facilisis id sapien quis, finibus ornare nulla. Fusce dapibus tellus nunc, eget bibendum odio imperdiet non. Proin tristique mauris sit amet enim placerat, vitae tincidunt nunc fermentum. Nulla facilisi. In tempor purus vestibulum, viverra purus et, luctus ipsum. Curabitur rutrum, velit a euismod sodales, ligula lectus fringilla lacus, ultricies finibus lectus ipsum nec lacus. Nullam enim nulla, hendrerit at elementum id, ullamcorper et justo.
<br/><br/><br/>
Donec sed mattis erat. Aliquam dictum diam ex, sit amet aliquet ante accumsan semper. Proin consectetur bibendum velit non lobortis. Vestibulum at blandit libero. Donec sit amet elit eget nisi semper pulvinar sit amet at nibh. In tellus leo, convallis non faucibus in, sodales eget sem. Mauris maximus dolor in augue venenatis, in pharetra metus ullamcorper. Morbi dapibus velit sed nisi aliquet vehicula. Nam dictum bibendum arcu, nec tincidunt tellus tincidunt lobortis. Donec dui metus, volutpat at tincidunt ac, sagittis vel orci. Aliquam pellentesque vestibulum mi, ac lobortis elit luctus sed. Ut mattis, risus non tempus interdum, odio diam tincidunt risus, convallis volutpat tellus lectus eu metus. Nullam neque libero, ultricies vitae augue at, tempor pellentesque risus.
<br/><br/><br/>
Quisque quis blandit diam. Duis elementum massa at elit sagittis, sit amet tincidunt magna imperdiet. Integer in tellus viverra, lacinia quam tristique, laoreet arcu. Duis ac eros ex. Etiam sollicitudin enim nec vestibulum placerat. Nulla nunc tellus, laoreet ut nisl quis, porttitor euismod sem. Aenean eget lectus eget ligula sagittis efficitur. Cras quis tristique quam.
<br/><br/><br/>
Vestibulum accumsan ac lectus at pellentesque. Sed eget porttitor felis, a auctor augue. Sed eros nisl, facilisis in erat vitae, rutrum vulputate neque. Vestibulum mollis fringilla convallis. Sed nec velit semper lorem gravida rhoncus. Sed a turpis nisi. Aliquam erat volutpat. Donec at interdum nisl, nec laoreet est. Duis eleifend sodales dui, in tincidunt odio pretium eu. Pellentesque a venenatis neque. Phasellus porttitor, ligula vel tempus vehicula, orci augue ultrices massa, non fringilla velit sem a ligula. Vestibulum id metus tortor.
<br/><br/><br/>
Duis egestas placerat lorem, ut egestas felis commodo ac. Integer rhoncus neque a lacus semper, eu semper eros posuere. Fusce orci orci, porta et sagittis quis, ultricies et dui. Sed ac iaculis nibh. Sed quis vehicula orci, vitae elementum augue. Sed id ullamcorper ex. Aenean vel varius ex, a scelerisque dolor. Cras bibendum odio at diam accumsan ultricies. Sed ut dolor dolor. Donec sed placerat turpis. Duis ac tortor eu enim lobortis accumsan.
<br/><br/><br/>
Phasellus efficitur ex eget diam pharetra sodales. Cras varius maximus leo. Nam tempus risus ligula, eu eleifend mi laoreet sit amet. Suspendisse leo tellus, eleifend nec turpis vel, aliquam iaculis lorem. Phasellus non metus sit amet arcu sagittis dapibus. Aliquam erat volutpat. Morbi ante lectus, dictum in ultrices nec, dictum eu ipsum. Morbi eleifend est eu urna hendrerit, sit amet facilisis erat ultrices. Vestibulum aliquam nisi id risus laoreet tempus. Suspendisse dignissim turpis id felis facilisis ultrices. Praesent nibh risus, elementum nec pulvinar vel, dapibus at velit. Phasellus in felis quis ipsum scelerisque sagittis. Aliquam bibendum, libero in aliquam mollis, orci nisl commodo ex, id lacinia lacus elit vitae nibh. In hac habitasse platea dictumst.
<br/><br/><br/>
Donec eu turpis ipsum. Cras sollicitudin erat ut diam imperdiet scelerisque. Morbi consectetur vulputate dui vel porta. Pellentesque suscipit commodo tortor eu rhoncus. Morbi rutrum fermentum ultricies. Proin euismod fringilla molestie. Sed maximus tristique nulla nec venenatis. Morbi in magna libero. Morbi interdum arcu in turpis tempus cursus. Donec id dui arcu. Proin quis cursus felis. Mauris a nunc eu purus varius iaculis in a sem. Praesent id felis eget lectus faucibus ultrices. Donec eu convallis lectus.
<br/><br/><br/>
`;

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);


// funcion que haga el calculo
const calcularPorcentajeScroll = (event) => {

    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    console.log({scrollTop, scrollHeight, clientHeight});

    return (scrollTop / (scrollHeight - clientHeight)) * 100;
};


// Streams
const scroll$ = fromEvent(document, 'scroll');

const progress$ = scroll$.pipe(
    map( calcularPorcentajeScroll ),
    tap( console.log )
);

progress$.subscribe(porcentaje => {
    progressBar.style.width = `${porcentaje}%`;
});
