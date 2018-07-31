require 'rspec'
require_relative 'recurring_moment'

describe RecurringMoment do
  describe '#match' do
    jan1 = DateTime.parse('Jan 1, 2018')
    jan10 = DateTime.parse('Jan 10, 2018')
    jan31 = DateTime.parse('Jan 31, 2018')
    feb1 = DateTime.parse('Feb 1, 2018')
    feb28 = DateTime.parse('Feb 28, 2018')
    may5 = DateTime.parse('May 5, 2018')
    nov12 = DateTime.parse('Nov 12, 2018')
    dec31 = DateTime.parse('Dec 31, 2018')
    dates = [jan1, jan10, jan31, feb1, feb28, may5, nov12, dec31]

    context 'daily' do
      let (:period) { 'daily' }

      context '1' do
        let(:interval) { 1 }

        dates.each do |start|
          it "correctly matches a one day interval from #{start.strftime('%D')}" do
            recurrence = RecurringMoment.new(period: period, interval: interval, start: start)
            expect(recurrence.match(start.advance(days: 1))).to eq true
            expect(recurrence.match(start.advance(days: 3))).to eq true
            expect(recurrence.match(start.advance(weeks: 6))).to eq true
          end
        end
      end

      context '2' do
        let (:interval) { 2 }

        dates.each do |start|
          it "correctly matches a two day interval from #{start.strftime('%D')}" do
            recurrence = RecurringMoment.new(period: period, interval: interval, start: start)
            expect(recurrence.match(start.advance(days: 2))).to eq true
            expect(recurrence.match(start.advance(days: 4))).to eq true
            expect(recurrence.match(start.advance(days: 12))).to eq true
            expect(recurrence.match(start.advance(weeks: 1))).to eq false
            expect(recurrence.match(start.advance(days: 7))).to eq false
          end
        end
      end

      context '5' do
        let(:interval) { 5 }

        dates.each do |start|
          it "correctly matches a five day interval from #{start.strftime('%D')}" do
            recurrence = RecurringMoment.new(period: period, interval: interval, start: start)
            expect(recurrence.match(start.advance(days: 5))).to eq true
            expect(recurrence.match(start.advance(days: 10))).to eq true
            expect(recurrence.match(start.advance(days: 50))).to eq true
            expect(recurrence.match(start.advance(days: 1))).to eq false
            expect(recurrence.match(start.advance(days: 2))).to eq false
            expect(recurrence.match(start.advance(days: 7))).to eq false
            expect(recurrence.match(start.advance(days: 51))).to eq false
          end
        end
      end
    end

    context 'weekly' do
      let (:period) { 'weekly' }

      context '1' do
        let(:interval) { 1 }

        dates.each do |start|
          it "correctly matches a one week interval from #{start.strftime('%D')}" do
            recurrence = RecurringMoment.new(period: period, interval: interval, start: start)
            expect(recurrence.match(start.advance(weeks: 1))).to eq true
            expect(recurrence.match(start.advance(weeks: 3))).to eq true
            expect(recurrence.match(start.advance(weeks: 6))).to eq true
            expect(recurrence.match(start.advance(days: 6))).to eq false
          end
        end
      end

      context '2' do
        let (:interval) { 2 }

        dates.each do |start|
          it "correctly matches a two week interval from #{start.strftime('%D')}" do
            recurrence = RecurringMoment.new(period: period, interval: interval, start: start)
            expect(recurrence.match(start.advance(weeks: 2))).to eq true
            expect(recurrence.match(start.advance(weeks: 4))).to eq true
            expect(recurrence.match(start.advance(weeks: 12))).to eq true
            expect(recurrence.match(start.advance(days: 6))).to eq false
            expect(recurrence.match(start.advance(weeks: 1))).to eq false
            expect(recurrence.match(start.advance(weeks: 7))).to eq false
          end
        end
      end

      context '5' do
        let(:interval) { 5 }

        dates.each do |start|
          it "correctly matches a five week interval from #{start.strftime('%D')}" do
            recurrence = RecurringMoment.new(period: period, interval: interval, start: start)
            expect(recurrence.match(start.advance(weeks: 5))).to eq true
            expect(recurrence.match(start.advance(weeks: 10))).to eq true
            expect(recurrence.match(start.advance(weeks: 50))).to eq true
            expect(recurrence.match(start.advance(days: 1))).to eq false
            expect(recurrence.match(start.advance(months: 2))).to eq false
            expect(recurrence.match(start.advance(weeks: 7))).to eq false
            expect(recurrence.match(start.advance(weeks: 51))).to eq false
          end
        end
      end
    end

    context 'monthly' do
      let(:period) { 'monthly' }

      context '1' do
        let(:interval) { 1 }

        dates.each do |start|
          it "correctly matches a one month interval from #{start.strftime('%D')}" do
            recurrence = RecurringMoment.new(period: period, interval: interval, start: start)
            expect(recurrence.match(start.advance(months: 1))).to eq true
            expect(recurrence.match(start.advance(months: 3))).to eq true
            expect(recurrence.match(start.advance(months: 6))).to eq true
            expect(recurrence.match(start.advance(days: 6))).to eq false
          end
        end
      end

      context '2' do
        let (:interval) { 2 }

        dates.each do |start|
          it "correctly matches a two month interval from #{start.strftime('%D')}" do
            recurrence = RecurringMoment.new(period: period, interval: interval, start: start)
            expect(recurrence.match(start.advance(months: 2))).to eq true
            expect(recurrence.match(start.advance(months: 4))).to eq true
            expect(recurrence.match(start.advance(months: 12))).to eq true
            expect(recurrence.match(start.advance(days: 6))).to eq false
            expect(recurrence.match(start.advance(months: 1))).to eq false
            expect(recurrence.match(start.advance(months: 7))).to eq false
          end
        end
      end

      context '5' do
        let(:interval) { 5 }

        dates.each do |start|
          it "correctly matches a five month interval from #{start.strftime('%D')}" do
            recurrence = RecurringMoment.new(period: period, interval: interval, start: start)
            expect(recurrence.match(start.advance(months: 5))).to eq true
            expect(recurrence.match(start.advance(months: 10))).to eq true
            expect(recurrence.match(start.advance(months: 50))).to eq true
            expect(recurrence.match(start.advance(days: 1))).to eq false
            expect(recurrence.match(start.advance(months: 2))).to eq false
            expect(recurrence.match(start.advance(months: 7))).to eq false
            expect(recurrence.match(start.advance(months: 51))).to eq false
          end
        end
      end
    end

    context 'far in the future' do
      it 'correctly matches days' do
        start = jan1
        period = 'daily'
        interval = 10
        recurrence = RecurringMoment.new(start: start, period: period, interval: interval)
        expect(recurrence.match(start.advance(days: 1000 * 10))).to eq true
        expect(recurrence.match(start.advance(days: 1000 * 10 + 1))).to eq false
      end

      it 'correctly matches weeks' do
        start = jan10
        period = 'weekly'
        interval = 10
        recurrence = RecurringMoment.new(start: start, period: period, interval: interval)
        expect(recurrence.match(start.advance(weeks: 1000 * 10))).to eq true
        expect(recurrence.match(start.advance(weeks: 1000 * 10 + 1))).to eq false
      end

      it 'correctly matches months' do
        start = jan31
        period = 'monthly'
        interval = 10
        recurrence = RecurringMoment.new(start: start, period: period, interval: interval)
        expect(recurrence.match(start.advance(months: 1000 * 10))).to eq true
        expect(recurrence.match(start.advance(months: 1000 * 10 + 1))).to eq false
      end
    end
  end
end
