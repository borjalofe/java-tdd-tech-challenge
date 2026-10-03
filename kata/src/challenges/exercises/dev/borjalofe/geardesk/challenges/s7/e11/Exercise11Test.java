package dev.borjalofe.geardesk.challenges.s7.e11;

import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;

class Exercise11Test {
  @Test
  void implementsConcern() {
    assertTrue(Exercise11.done(), "Implement: Filter Kits by title contains");
  }
}
