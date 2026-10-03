package dev.borjalofe.geardesk.challenges.s12.e20;

import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;

class Exercise20Test {
  @Test
  void implementsConcern() {
    assertTrue(Exercise20.done(), "Implement: end >= start");
  }
}
