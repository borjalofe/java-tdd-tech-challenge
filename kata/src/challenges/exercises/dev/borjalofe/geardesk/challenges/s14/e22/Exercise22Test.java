package dev.borjalofe.geardesk.challenges.s14.e22;

import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;

class Exercise22Test {
  @Test
  void implementsConcern() {
    assertTrue(Exercise22.done(), "Implement: Same kit no overlapping borrowers");
  }
}
