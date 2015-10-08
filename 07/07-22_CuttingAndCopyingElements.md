CUTTING AND COPYING ELEMENTS


CUT

.remove() - Removes matched elements from DOM tree (inlcuind any descendants and text nodes).


.detach() - Same as .remove(), BUT keeps a copy of them in memory.
          - Retains any even handlers (and any other associated jQuery data) so they can be inserted back into the page.


.empty() - Removes child nodes and descendants from any elements in a matched set.


.unwrap() - Removes parents of matched set, leaving matched elements.



COPY

.clone() - Creates a copy of the matched set (including any descendants and text nodes).


PASTE - SEE Inserting Elements using .append(), .prepend(), .before(), .after()


