/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const arrayFun = (d) => (d ? d.val + arrayFun(d.next) : "");

var addTwoNumbers = function (l1, l2) {
  let result = (
    BigInt(
      arrayFun(l1)
        .split("")
        .reverse()
        .map((item) => item)
        .join("")
    ) +
    BigInt(
      arrayFun(l2)
        .split("")
        .reverse()
        .map((item) => item)
        .join("")
    )
  )
    .toString()
    .split("")
    .reverse()
    .map((num) => +num);
  let data = {};
  let cur = data;
  result.forEach((elem, index) => {
    cur.val = elem;
    cur.next = index === result.length - 1 ? null : { val: 0, next: null };
    cur = cur.next;
  });

  return data;
};

console.log(
  addTwoNumbers(
    (l1 = {
      val: 2,
      next: {
        val: 4,
        next: {
          val: 3,
          next: null,
        },
      },
    }),
    (l2 = {
      val: 5,
      next: {
        val: 6,
        next: {
          val: 4,
          next: null,
        },
      },
    })
  )
);
