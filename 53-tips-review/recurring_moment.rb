require 'pry'
require 'active_support'
require 'active_support/core_ext'

# date picker
# validator
# recurring calendar event
# - meeting that happens every other month
# - weekly brunch

# jan 1, interval: 2, monthly
# dates that should match: march 1, may 1, july 1
# should not match: jan 2, feb 1

class RecurringMoment
  def initialize(start:, interval:, period:)
    @start = start
    @interval = interval
    @period = period
  end

  # Runtime?
  # How many times do we have to go through our loop?
  # (target - start) / (interval periods)
  def match(date)
    current = @start
    # puts @start
    # puts @interval
    # puts @period
    counter = 1

    while current <= date
      if current == date
        return true
      end

      # hypotheses:
      # feb only has 28 days
      # 31st

      # problem:
      # when we add one month to jan 31
      # the current date is now set to feb 28
      # then, when we add another month, we get march 28 instead of march 31

      # strategies:
      # try adding one day, then testing whether the month is the same?

      # puts "#{current.strftime('%D')}"
      # binding.pry

      if @period == 'monthly'
        # current = current.advance(days: 1)
        current = @start.advance(months: @interval * counter)
        # current = current.advance(days: -1)
      elsif @period == 'weekly'
        current = @start.advance(weeks: @interval * counter)
      elsif @period == 'daily'
        current = @start.advance(days: @interval * counter)
      end
      counter += 1
    end

    return false
  end
end
