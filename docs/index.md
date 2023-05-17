<!-- ---
hide:
  - toc
--- -->

# Dashboard

<!-- ![LeetCode](images/wordmark.png) -->

<p align="center">
  <img src="images/wordmark.png" alt="LeetCode" width="85%">
</p>

---


**Source Code**: <https://github.com/hotjuicew/leetcode>

---

<!-- ![LeetCode Stats](https://leetcard.jacoblin.cool/hotjuicew?site=cntheme=light&font=Play&ext=heatmap) -->

<img
  id="stats"
  align="right"
  src="https://leetcard.jacoblin.cool//hotjuicew?site=cn&theme=light&font=Play&ext=heatmap"
  alt="LeetCode Stats"
  width="400px">

<script>
  var stats = document.getElementById("stats")

  let light = "https://leetcard.jacoblin.cool/hotjuicew?site=cn&theme=light&font=Play&ext=heatmap";
  let dark = "https://leetcard.jacoblin.cool/hotjuicew?site=cn&theme=nord&font=Play&ext=heatmap";

  var palette = __md_get("__palette")
  if (palette && typeof palette.color === "object") {
    var theme = palette.color.scheme === "slate" ? dark : light;
    stats.setAttribute("src", theme)
  }

  document.addEventListener("DOMContentLoaded", function() {
    var ref = document.querySelector("[data-md-component=palette]")
    ref.addEventListener("change", function() {
      var palette = __md_get("__palette")
      if (palette && typeof palette.color === "object") {
        var theme = palette.color.scheme === "slate" ? dark : light;
        stats.setAttribute("src", theme)
      }
    })
  })
</script>

---

_This site is powered by [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) ._
