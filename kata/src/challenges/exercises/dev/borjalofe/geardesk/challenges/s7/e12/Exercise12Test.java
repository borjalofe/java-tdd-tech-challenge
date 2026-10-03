package dev.borjalofe.geardesk.challenges.s7.e12;

import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;

class Exercise12Test {
  @Test
  void implementsConcern() {
    assertTrue(Exercise12.done(), "Implement: Filter Kits by GearKind");
  }
}
