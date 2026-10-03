package dev.borjalofe.geardesk.challenges.s5.e08;

import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;

class Exercise08Test {
  @Test
  void implementsConcern() {
    assertTrue(Exercise08.done(), "Implement: Delete Brand; reject if kits reference it");
  }
}
