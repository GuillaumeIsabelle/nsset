import test from 'tape';
import nsset from '../src';

test('nsset', (t) => {
  t.plan(1);
  t.equal(true, nsset(), 'return true');
});
