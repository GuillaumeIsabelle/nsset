import test from 'tape';
import nsset from '../src';

test('nsset', (t) => {
   t.plan(1);
   
   
   var txt = "hello world";
   var target = "HOME.FOOTER.MYNOTES";
   
   var o = new Object();
   
   o.whatever = "something";
   
   var r = 
   nsset(target,o,txt);
   
   
   t.equal(txt, o.HOME.FOOTER.MYNOTES,txt);

});
