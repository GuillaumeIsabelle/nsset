import test from 'tape';
import nsset from '../src';

test('nsset', (t) => {
  t.plan(1);

  const txt = 'hello world';
  const target = 'HOME.FOOTER.MYNOTES';
  const o = {};

  o.whatever = 'something';
  nsset(target, o, txt);
  t.equal(txt, o.HOME.FOOTER.MYNOTES, txt);
});
